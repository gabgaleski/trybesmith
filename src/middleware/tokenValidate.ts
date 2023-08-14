import { Request, Response, NextFunction } from 'express';
import token from '../util/jwt';
import UserModel from '../database/models/user.model';

function extractToken(bearerToken: string): string {
  return bearerToken.includes(' ') ? bearerToken.split(' ')[1] : bearerToken;
}

function tokenValidate(req: Request, res: Response, next: NextFunction): Response | void {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const tokenBarear = extractToken(authorization);
    const decoded = token.verifyToken(tokenBarear);
    const { username } = decoded;
    const result = UserModel.findOne({ where: { username } });
    if (!result) return res.status(401).json({ message: 'Invalid token' });
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default tokenValidate;