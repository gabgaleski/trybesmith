import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number,
  username: string,
};

function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, secret);
}

function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, secret) as TokenPayload;
}

export default {
  generateToken,
  verifyToken,
};