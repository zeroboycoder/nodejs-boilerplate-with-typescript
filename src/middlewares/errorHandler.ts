import { Request, Response } from "express"
import { httpError } from '../../types'
import { cleanObj } from '../util'

export const errorHandler = (error: httpError, req: Request, res: Response) => {
  const statusCode = error.statusCode || 400;

  return res.status(500).json(cleanObj({
    name: error.name,
    statusCode,
    message: error.message,
    stack: error.stack
  }))
}