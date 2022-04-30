import { atom } from 'recoil'

export const productListState = atom({
  key: 'productListState',
  default: [
    { id: 1, price: 10000, title: 'quần sịp siêu nhân' },
    { id: 2, price: 20000, title: 'quần sịp người sắt' },
    { id: 3, price: 30000, title: 'quần sịp hulk siêu to' },
  ],
})