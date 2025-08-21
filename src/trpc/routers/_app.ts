import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { agentsRouter } from '@/modules/agents/server/procedures';

export const appRouter = createTRPCRouter({
    // Your existing agents router
    agents: agentsRouter,
    
    // Step 1: Simple procedure (like @GetMapping("/hello"))
  
});

// Export type definition of API
export type AppRouter = typeof appRouter;