import OrderModel from '../database/models/order.model';
import { Order } from '../types/Order';
import ProductModel from '../database/models/product.model';

async function getAll(): Promise<Order[]> {
  const orderList = await OrderModel.findAll(
    {
      include: [
        { model: ProductModel, as: 'productIds', attributes: ['id'] },
      ],
    },
  );

  const listItems = orderList.map((product) => product.dataValues);

  return listItems;
}

export = {
  getAll,
};