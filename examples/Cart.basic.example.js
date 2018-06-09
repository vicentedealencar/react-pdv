import React from 'react'
import { Cart } from '../src'

const cart = {
  items: [
    {
      name: 'prod1',
      price: 123.45
    },
    {
      name: 'prod2',
      price: 678.9
    }
  ]
}

export default props => (
  <Cart
    View={'div'}
    Container={'div'}
    Text={'p'}
    CartItem={null}
    empty={false}
    cart={cart}
    style={style}
  >
    I am a button, please click me
  </Cart>
)

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
