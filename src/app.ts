import express, { Request, Response, NextFunction } from 'express';
import { errorHandler } from './middlewares/errorHandler'
import { httpError } from '../types';

const app = express()

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.url)
  next()
})

// global error handling
app.use((err: httpError, req: Request, res: Response) => {
  errorHandler(err, req, res);
});

export default app;