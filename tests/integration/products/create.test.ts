import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { bodyMockProduct, bodyMockNoName, bodyMockNumberName, bodyMockNoPrice } from '../../mocks/products.mock';
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

  it('Testa se é possivel criar um novo produto com o "name" vazio', async () => {

      sinon.stub(ProductModel, 'create').resolves();
      // act
  
      const result = await chai.request(app).post('/products').send(bodyMockNoName);
  
      // Assert 
  
      expect(result.status).to.equal(400);
      expect(result.body.message).to.equal('"name" is required');
  });

  it('Testa se é possivel criar um novo produto passando algo que nao é string para "name"', async () => {

    sinon.stub(ProductModel, 'create').resolves();
    // act

    const result = await chai.request(app).post('/products').send(bodyMockNumberName);

    // Assert 

    expect(result.status).to.equal(422);
    expect(result.body.message).to.equal('"name" must be a string');
});

it('Testa se é possivel criar um novo produto nao passando "price"', async () => {

  sinon.stub(ProductModel, 'create').resolves();
  // act

  const result = await chai.request(app).post('/products').send(bodyMockNoPrice);

  // Assert 

  expect(result.status).to.equal(400);
  expect(result.body.message).to.equal('"price" is required');
});

});
