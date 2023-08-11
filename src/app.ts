import express from 'express';
import productRouter from './routers/ProductsRoute';
import orderRoute from './routers/OrderRoute';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(orderRoute);

export default app;
