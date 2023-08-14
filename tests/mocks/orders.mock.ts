const payloadMock = {
  username: 'test',
  password: '123456'
}

const userMock = {
  id: 1,
  username: 'test',
  vocation: 'Guerreiro',
  level: 11,
  password: '123456'
}

const registerOrderMock = {
  userId: 1,
  productIds: [1, 2, 3],
}

const tokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2b2NhdGlvbiI6Ikd1ZXJyZWVzIiwiaWF0IjoxNjI0MjU0NjQ2LCJleHAiOjE2M'

const registerNoUserId = {
  productIds: [1, 2, 3],
}

const registerNoProductIds = {
  userId: 1,
}

const registerNoNumberUserId = {
  userId: 'a',
  productIds: [1, 2, 3],
}

const registerNoArrayProductIds = {
  userId: 1,
  productIds: 1,
};

export default {
  payloadMock,
  userMock,
  registerOrderMock,
  tokenMock,
  registerNoUserId,
  registerNoProductIds,
  registerNoNumberUserId,
  registerNoArrayProductIds,
}