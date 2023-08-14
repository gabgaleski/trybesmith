import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validate from '../middleware/productValidate';

const productRouter = Router();

productRouter.post(
  '/products',
  validate.productValidateName,
  validate.productPrice,
  productsController.create,
);

productRouter.get('/products', productsController.getAll);

export default productRouter;