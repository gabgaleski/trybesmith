import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import { listMock } from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se é possivel listar os produtos', async() => {

    const result = await chai.request(app).get('/products');

    expect(result.status).to.equal(200)

  })
});
