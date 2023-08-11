const bodyMockProduct = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4
}

type list = {
  id:number,
  name: string,
  price: string,
  orderId: number | null
}

const listMock: list[] = [
  {
    id: 1,
    name: "Pedra Filosofal",
    price: "20 gold",
    orderId: null
  },
  {
    id: 2,
    name: "Lança do Destino",
    price: "100 diamond",
    orderId: 1
  }
]

export {
  bodyMockProduct,
  listMock
}