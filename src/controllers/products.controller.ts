import { Request, Response } from 'express';
import productsServices from '../services/products.services';

async function create(req: Request, res: Response): Promise<Response> {
  const result = await productsServices.create(req.body);

  return res.status(201).json(result);
}

async function getAll(_req: Request, res: Response): Promise<Response> {
  const result = await productsServices.getAll();

  return res.status(200).json(result);
}

export = {
  create,
  getAll,
};