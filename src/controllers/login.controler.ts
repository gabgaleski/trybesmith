import { Request, Response } from 'express';
import loginServices from '../services/login.services';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  const result = await loginServices.login(req.body);

  if (result.message !== 'SUCESSFUL') return res.status(401).json({ message: result.message });

  return res.status(200).json({ token: result.token });
}

export = {
  login,
};