import React from 'react'
import numeral from 'numeral'
import Button from '../Button'
import { default as DefaultCartItem } from './CartItem'

const identity = x => x
const createSumReducer = (selector = identity) => (acc, curr) =>
  acc + selector(curr)
const totalPriceReducer = createSumReducer(x =>
  numeral(x.price)
    .multiply(x.amount)
    .value()
)
const onContinue = () => alert('🎉🎉🎉')

export default class Cart extends React.PureComponent {
  render() {
    const {
      View = 'div',
      Container = 'div',
      Text = 'p',
      CartItem = DefaultCartItem,
      cart,
      updateCartItem,
      loading,
      disabled,
      style,
      ...otherProps
    } = this.props

    const empty = !cart || !cart.items || !cart.items.length
    const total =
      cart && cart.items ? cart.items.reduce(totalPriceReducer, 0) : 0
    const cartItems =
      cart &&
      cart.items &&
      cart.items.map((item, i) => (
        <CartItem
          key={i}
          item={item}
          Text={Text}
          View={View}
          updateCartItem={updateCartItem}
        />
      ))

    if (loading) {
      return <Loader />
    }

    return (
      <View {...otherProps} style={[styles.cartContainer, style]}>
        {!empty && (
          <Container>
            <Text style={styles.totalCost}>
              {`Total: ${numeral(total).format()}`}
            </Text>
            <View style={styles.cartItems}>{cartItems}</View>
          </Container>
        )}
        <Button component="button" style={style} onClick={onContinue}>
          Continue
        </Button>
      </View>
    )
  }
}

const styles = {
  cartContainer: {
    flex: 1
  },
  totalCost: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '900',
    alignSelf: 'center'
  },
  cartItems: {
    borderBottomWidth: 4.5,
    borderColor: '#d6d7da'
  }
}
