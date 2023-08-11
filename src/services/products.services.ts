import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

async function create(product: Product): Promise<Product> {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
}

export = {
  create,
};