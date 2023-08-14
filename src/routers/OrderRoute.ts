import { Router } from 'express';
import ordersController from '../controllers/orders.controler';
import tokenValidate from '../middleware/tokenValidate';
import { orderUserValidate, orderProductValidate } from '../middleware/orderValidate';

const orderRoute = Router();

orderRoute.get('/orders', ordersController.getAll);
orderRoute.post(
  '/orders',
  tokenValidate,
  orderUserValidate,
  orderProductValidate,
  ordersController.create,
);

export default orderRoute;