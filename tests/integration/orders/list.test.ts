import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se é possivel listar os produtos', async() => {

    const result = await chai.request(app).get('/orders');

    expect(result.status).to.equal(200)

  })

});
