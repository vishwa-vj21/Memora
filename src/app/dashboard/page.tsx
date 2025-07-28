import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC } from "react";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return <div>Dashboard</div>;
};

export default page;
