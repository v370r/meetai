import { db} from "@/db";
import { agents } from "@/db/schema";
import { createTRPCRouter, baseProcedure } from "@/trpc/init";

export const agentsRouter = createTRPCRouter({
  getAgents: baseProcedure.query(async () => {
    const data = await db
      .select()
      .from(agents);

    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new TRPCError({code : "BAD_GATEWAY"});
    return data; // Return the actual data, not the schema
  }),
});