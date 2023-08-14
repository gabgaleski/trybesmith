import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import jwt from 'jsonwebtoken';
import UserModel from '../../../src/database/models/user.model';
import ProductModel from '../../../src/database/models/product.model';
import ordersMock from '../../mocks/orders.mock';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa erro ao tentar criar uma ordem sem tolken', async function () {
    const order = {
      userId: 1,
      productIds: [1, 2],
    };

    const response = await chai.request(app).post('/orders').send(order);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({message: 'Token not found'});
  });

  it('Valida se é possivel cadastrar uma ordem', async function () {

    sinon.stub(jwt, 'verify').resolves(ordersMock.payloadMock);

    const registerUser = UserModel.build(ordersMock.userMock);
    sinon.stub(UserModel, 'findOne').resolves(registerUser);

    const response = await chai.request(app)
    .post('/orders')
    .send(ordersMock.registerOrderMock)
    .set('authorization', ordersMock.tokenMock);

    expect(response.status).to.equal(201);

  })
  
  it('Retorna erro ao nao incluir o campo "userId"', async function () {
    sinon.stub(jwt, 'verify').resolves(ordersMock.payloadMock);

    const registerUser = UserModel.build(ordersMock.userMock);
    sinon.stub(UserModel, 'findOne').resolves(registerUser);

    const response = await chai.request(app)
    .post('/orders')
    .send(ordersMock.registerNoUserId)
    .set('authorization', ordersMock.tokenMock);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({message: '"userId" is required'});
  })

  it('Retorna erro ao nao incluir o campo "productIds"', async function () {
    sinon.stub(jwt, 'verify').resolves(ordersMock.payloadMock);

    const registerUser = UserModel.build(ordersMock.userMock);
    sinon.stub(UserModel, 'findOne').resolves(registerUser);

    const response = await chai.request(app)
    .post('/orders')
    .send(ordersMock.registerNoProductIds)
    .set('authorization', ordersMock.tokenMock);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({message: '"productIds" is required'});
  });

  it('Retorna erro ao nao colocar um numbero no campo "userId"', async function () {
    sinon.stub(jwt, 'verify').resolves(ordersMock.payloadMock);

    const registerUser = UserModel.build(ordersMock.userMock);
    sinon.stub(UserModel, 'findOne').resolves(registerUser);

    const response = await chai.request(app)
    .post('/orders')
    .send(ordersMock.registerNoNumberUserId)
    .set('authorization', ordersMock.tokenMock);

    expect(response.status).to.equal(422);
    expect(response.body).to.be.deep.equal({message: '"userId" must be a number'});
  });

  it('Retorna erro ao nao colocar um array no campo "productIds"', async function () {
    sinon.stub(jwt, 'verify').resolves(ordersMock.payloadMock);

    const registerUser = UserModel.build(ordersMock.userMock);
    sinon.stub(UserModel, 'findOne').resolves(registerUser);

    const response = await chai.request(app)
    .post('/orders')
    .send(ordersMock.registerNoArrayProductIds)
    .set('authorization', ordersMock.tokenMock);

    expect(response.status).to.equal(422);
    expect(response.body).to.be.deep.equal({message: '"productIds" must be an array'});
  });

});
