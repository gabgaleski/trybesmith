import { Router } from 'express';
import loginController from '../controllers/login.controler';

const loginRoute = Router();

loginRoute.post('/login', loginController.login);

export default loginRoute;