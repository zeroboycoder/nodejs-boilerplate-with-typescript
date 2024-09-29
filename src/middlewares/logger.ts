import { Request, Response, NextFunction } from 'express'
import { info } from '../util/logger'

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  info(req.method + ' ' + req.url)
  next()
}