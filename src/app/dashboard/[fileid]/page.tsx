import { FC } from "react";
import { PageProps } from "./../../../../.next/types/app/api/trpc/[trpc]/route";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import { db } from "@/db";

interface pageProps {
  params: {
    fileid: string;
  };
}

const page = async ({ params }: pageProps) => {
  const { fileid } = await params;

  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`);

  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  });

  if (!file) notFound();

  return <div>page</div>;
};

export default page;
