import OrderModel from '../database/models/order.model';
import { OrderResult } from '../types/Order';
import ProductModel from '../database/models/product.model';

async function getAll(): Promise<OrderResult[]> {
  const orderList = await OrderModel.findAll(
    {
      include: [
        { model: ProductModel, as: 'productIds', attributes: ['id'] },
      ],
    },
  );

  const listItems = orderList.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((orderId) => orderId.id), // productIds = [ { id, name, price, order }]
  }));

  return listItems;
}

export = {
  getAll,
};