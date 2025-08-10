"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  // Run the query
  const { data, isLoading } = trpc.authCallback.useQuery();

  // React to success
  useEffect(() => {
    if (data?.success) {
      router.push(origin || "/");
    }
  }, [data, origin, router]);

  return <div>{isLoading ? "Loading..." : "Done"}</div>;
};

export default Page;
