import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { bodyMockProduct } from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se é possivel criar um novo produto', async () => {

    const productRegister = ProductModel.build(bodyMockProduct);

    sinon.stub(ProductModel, 'create').resolves(productRegister);

    // act

    const result = await chai.request(app).post('/products').send(bodyMockProduct);

    // Assert 

    expect(result.status).to.equal(201);

  })

});
