const validPassword = '123456';
const validUsername = 'test';

const noUsername = { username: '', password: validPassword };
const noPassword = { username: validUsername, password: '' };

export default {
  validPassword,
  validUsername,
  noUsername,
  noPassword,
}