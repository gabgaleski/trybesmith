import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';

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

  it('Erro ao enviar um email valido e senha invalida', async () => {
    const loginBuild = UserModel.build(loginMock.userExist);
    sinon.stub(UserModel, 'findOne').resolves(loginBuild);
    
    const result = await chai.request(app)
      .post('/login')
      .send(loginMock.invalidPassword);
    expect(result).to.have.status(401);
    expect(result.body.message).to.be.equal('Username or password invalid');
  });

});
