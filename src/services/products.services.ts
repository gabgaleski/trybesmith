import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

async function create(product: Product): Promise<Product> {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
}

async function getAll(): Promise<Product[]> {
  const productList = await ProductModel.findAll();

  // console.log(productList);

  return productList.map((product) => product.dataValues);
}

export = {
  create,
  getAll,
};