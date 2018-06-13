import React from 'react'
import { Cart } from '../src'

const basicCart = {
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
      amount: 6,
      price: 678.9
    }
  ]
}

export default class extends React.Component {
  state = {
    cart: basicCart
  }

  updateCartItem = item =>
    this.setState(state => ({
      cart: {
        ...state.cart,
        items: state.cart.items.map(it => (it.id !== item.id ? it : item))
      }
    }))

  render() {
    const { cart } = this.state
    return (
      <Cart cart={cart} style={style} updateCartItem={this.updateCartItem} />
    )
  }
}

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
