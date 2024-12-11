import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './router';
import express from 'express';
import cors from 'cors';
const app = express();
const isProduction = process.env.ENVIRONMENT === 'production';
if(!isProduction) {
    app.use(cors());
}
// created for each request
const createContext = () => ({}) // no context
app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
);

app.listen(isProduction ? 80 : 4201);
