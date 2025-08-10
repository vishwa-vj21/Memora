import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { trpc } from "./../../../_trpc/client";
import { appRouter } from "@/trpc";
function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });
}
export { handler as GET, handler as POST };
