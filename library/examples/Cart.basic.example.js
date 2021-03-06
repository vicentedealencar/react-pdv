import React from 'react'
import { Cart, PdvProvider } from 'react-pdv'
import Button from './Button.basic.example'

const RegularButton = ({ style, ...otherProps }) => (
  <Button {...otherProps} style={{ marginTop: 10, ...style }} />
)

const SubmitButton = ({ style, ...otherProps }) => (
  <RegularButton
    {...otherProps}
    style={{ backgroundColor: '#007777', ...style }}
  >
    Comprar
  </RegularButton>
)

const MonoText = ({ style, ...otherProps }) => {
  return (
    <span
      style={{
        fontFamily: 'monospace',
        marginLeft: 10,
        marginRight: 10,
        ...style
      }}
      {...otherProps}
    />
  )
}

const H2Total = ({ children, ...otherProps }) => (
  <h2 {...otherProps}>{`Total: ${children}`}</h2>
)

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
    const { components, ...props } = this.props
    const passedComponents = {
      Title: H2Total,
      Text: MonoText,
      Button: RegularButton,
      SubmitButton: SubmitButton,
      ...components
    }
    return (
      <PdvProvider components={passedComponents}>
        <Cart
          cart={this.state.cart}
          updateCartItem={this.updateCartItem}
          onSubmit={cart => alert(JSON.stringify(cart, null, 2))}
          {...props}
        />
      </PdvProvider>
    )
  }
}
