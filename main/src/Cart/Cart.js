import React from 'react'
import format from '../format'
import withComponents from '../withComponents'

const identity = x => x
const createSumReducer = (selector = identity) => (acc, curr) =>
  acc + selector(curr)
const totalPriceReducer = createSumReducer(x => x.price * x.amount)

class Cart extends React.PureComponent {
  render() {
    const {
      onSubmit = console.log,
      cart,
      updateCartItem,
      loading,
      disabled,
      style,
      components,
      ...otherProps
    } = this.props

    const {
      View,
      Container,
      Text,
      Title,
      CartItem,
      Button,
      SubmitButton,
      UpdateCartItem
    } = components
    
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
          components={components}
          updateCartItem={updateCartItem}
        />
      ))

    if (loading) {
      return <Loader />
    }

    return (
      <View {...otherProps} style={[styles.cartContainer].concat(style)}>
        {!empty && (
          <Container>
            <Title>{format(total)}</Title>
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

export default withComponents(Cart)
