import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const result = await ordersServices.getAll();

  return res.status(200).json(result);
}

async function create(req: Request, res: Response): Promise<Response> {
  const result = await ordersServices.create(req.body);

  return res.status(201).json(result);
}

export = {
  getAll,
  create,
};