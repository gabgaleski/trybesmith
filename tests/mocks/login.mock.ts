const validPassword = '123456';
const validUsername = 'test';

const noUsername = { username: '', password: validPassword };
const noPassword = { username: validUsername, password: '' };

const invalidPassword = { username: validUsername, password: '123' };

const userExist = {
  id: 1,
  username: validUsername,
  password: validPassword,
  vocation: 'knight',
  level: 1,
}

export default {
  validPassword,
  validUsername,
  noUsername,
  noPassword,
  invalidPassword,
  userExist,
}