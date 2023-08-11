import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Erro ao nao passar username', async () => {
    const result = await chai.request(app)
      .post('/login')
      .send(loginMock.noUsername);
    expect(result).to.have.status(400);
    expect(result.body.message).to.be.equal('"username" and "password" are required');
  })

});
