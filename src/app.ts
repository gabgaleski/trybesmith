import express from 'express';
import productRouter from './routers/ProductsRoute';
import orderRoute from './routers/OrderRoute';
import loginRoute from './routers/LoginRoute';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(orderRoute);
app.use(loginRoute);

export default app;
