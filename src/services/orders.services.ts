import OrderModel from '../database/models/order.model';
import { OrderResult, OrderCreate } from '../types/Order';
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
    productIds: dataValues.productIds?.map((orderId) => orderId.id),
  }));

  return listItems;
}

async function create(infos: OrderCreate): Promise<OrderCreate> {
  const { userId, productIds } = infos;
  const result = await OrderModel.create({ userId });
  productIds?.map((productId) => ProductModel.update(
    { orderId: result.dataValues.id },
    { where: { id: productId } },
  ));

  return { ...result.dataValues, productIds };
}

export = {
  getAll,
  create,
};