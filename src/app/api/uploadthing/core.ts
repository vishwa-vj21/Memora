import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

import { PineconeStore } from "@langchain/pinecone";
import { CohereEmbeddings } from "@langchain/cohere";
import { getPineconeClient } from "@/lib/pinecone";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({
    pdf: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const { getUser } = await getKindeServerSession();
      const user = await getUser();

      if (!user || !user.id) {
        throw new UploadThingError("Unauthorized");
      }

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const createdFile = await db.file.create({
        data: {
          key: file.key,
          name: file.name,
          userId: metadata.userId,
          url: file.ufsUrl,
          uploadStatus: "PROCESSING",
        },
      });

      try {
        console.log("Upload complete triggered for file:", file.name);

        // 1. Load PDF
        const response = await fetch(file.ufsUrl);
        const blob = await response.blob();
        const loader = new PDFLoader(blob);
        const pageLevelDocs = await loader.load();

        // 2. Setup Pinecone
        const pinecone = await getPineconeClient();
        const pineconeIndex = pinecone.index("memora");

        console.log("PINE KEY RAW:", process.env.PINECONE_API_KEY);
        console.log(
          "COHERE KEY Partial:",
          process.env.COHERE_API_KEY?.slice(0, 5)
        );

        // 3. Embed with Cohere
        const embeddings = new CohereEmbeddings({
          apiKey: process.env.COHERE_API_KEY!,
          model: "embed-english-v3.0",
        });

        // 4. Store docs in Pinecone
        await PineconeStore.fromDocuments(pageLevelDocs, embeddings, {
          pineconeIndex,
          namespace: createdFile.id,
        });

        // 5. Update DB status
        await db.file.update({
          data: { uploadStatus: "SUCCESS" },
          where: { id: createdFile.id },
        });

        console.log("Upload processing finished for:", file.name);
      } catch (err) {
        console.error("There is an error:", err);
        await db.file.update({
          data: { uploadStatus: "FAILED" },
          where: { id: createdFile.id },
        });
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
