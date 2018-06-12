import React from 'react'
import { Cart } from '../src'

const cart = {
  items: [
    {
      id: 'prod1',
      name: 'prod1',
      description: 'lorem ipsum dolor flanders',
      amount: 1,
      price: 123.45
    },
    {
      id: 'prod2',
      name: 'prod2',
      description: 'lorem ipsum dolor flanders',
      amount: 2,
      price: 678.9
    }
  ]
}

export default props => <Cart empty={false} cart={cart} style={style} />

const style = {
  backgroundColor: '#770000',
  color: '#fff',
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 100,
  paddingLeft: 100,
  border: '5px solid black',
  borderRadius: 20
}
