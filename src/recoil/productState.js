import { atom } from 'recoil'

export const productListState = atom({
  key: 'productListState',
  default: [
    { id: 1, price: 10000, title: 'card 10k' },
    { id: 2, price: 20000, title: 'card 20k' },
    { id: 3, price: 30000, title: 'card 30k' },
  ],
})