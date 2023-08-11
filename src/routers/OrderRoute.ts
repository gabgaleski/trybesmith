import { Router } from 'express';
import ordersController from '../controllers/orders.controler';

const orderRoute = Router();

orderRoute.get('/orders', ordersController.getAll);

export default orderRoute;