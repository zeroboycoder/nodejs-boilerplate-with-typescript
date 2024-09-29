import express, { Request, Response } from 'express';
import { loggerMiddleware } from './middlewares/logger'
import { errorHandler } from './middlewares/errorHandler'
import { httpError } from '../types';

const app = express()

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(loggerMiddleware)


// global error handling
app.use((err: httpError, req: Request, res: Response) => {
  errorHandler(err, req, res);
});

export default app;