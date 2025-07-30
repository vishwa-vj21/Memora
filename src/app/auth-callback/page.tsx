import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const dk = searchParams.get("origin");
};

export default page;
