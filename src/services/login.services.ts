import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../util/jwt';

type Token = {
  token?: string,
  message: string,
};

async function login(loginObj: { username: string, password: string }): Promise<Token> {
  const { username, password } = loginObj;
  const result = await UserModel.findOne({ where: { username } });

  if (!result || !bcrypt.compareSync(password, result.dataValues.password)) {
    return { message: 'Username or password invalid' };
  }
  const { id } = result.dataValues;
  const token = jwt.generateToken({ id, username });

  return { message: 'SUCESSFUL', token };
}

export = {
  login,
};