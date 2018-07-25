import React from 'react'
import numeral from 'numeral'
import { Defaults } from '../index'

const identity = x => x
const createSumReducer = (selector = identity) => (acc, curr) =>
  acc + selector(curr)
const totalPriceReducer = createSumReducer(x =>
  numeral(x.price)
    .multiply(x.amount)
    .value()
)

export default class Cart extends React.PureComponent {
  render() {
    const {
      View = Defaults.View,
      Container = Defaults.Container,
      Text = Defaults.Text,
      Title = Defaults.Text,
      CartItem = Defaults.CartItem,
      Button = Defaults.Button,
      SubmitButton = Defaults.Button,
      onSubmit = console.log,
      cart,
      updateCartItem,
      UpdateCartItem = Defaults.UpdateCartItem,
      loading,
      disabled,
      style,
      ...otherProps
    } = this.props

    const empty = !cart || !cart.items || !cart.items.length
    const total =
      cart && !cart.items ? 0 : cart.items.reduce(totalPriceReducer, 0)
    const cartItems =
      cart &&
      cart.items &&
      cart.items.map((item, i) => (
        <CartItem
          key={i}
          item={item}
          Text={Text}
          View={View}
          Button={Button}
          updateCartItem={updateCartItem}
          UpdateCartItem={UpdateCartItem}
        />
      ))

    if (loading) {
      return <Loader />
    }

    return (
      <View {...otherProps} style={[styles.cartContainer, style]}>
        {!empty && (
          <Container>
            <Title>{numeral(total).format()}</Title>
            <View>{cartItems}</View>
          </Container>
        )}
        <SubmitButton onClick={() => onSubmit(cart)} />
      </View>
    )
  }
}

const styles = {
  cartContainer: {
    flex: 1
  }
}
