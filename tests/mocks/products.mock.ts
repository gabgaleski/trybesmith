const bodyMockProduct = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4
}

const bodyMockNoName = {
  name: '',
  price: "30 peças de ouro",
  orderId: 4
}

const bodyMockNumberName = {
  name: 123,
  price: "30 peças de ouro",
  orderId: 4
}

const bodyMockNoPrice = {
  name: 'Perna de pau',
  price: "",
  orderId: 4
}

export {
  bodyMockProduct,
  bodyMockNoName,
  bodyMockNumberName,
  bodyMockNoPrice,
}