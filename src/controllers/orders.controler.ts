import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const result = await ordersServices.getAll();

  return res.status(200).json(result);
}

export = {
  getAll,
};