import React from 'react'
import Button from '../Button'
import { default as DefaultCartItem } from './CartItem'

const identity = x => x
const formatPrice = x => parseFloat(x).toFixed(2)
const createSumReducer = (selector = identity) => (acc, curr) =>
  acc + selector(curr)
const totalPriceReducer = createSumReducer(x => x.price)
const onContinue = () => alert('🎉🎉🎉')

export default class Cart extends React.PureComponent {
  state = {
    items: {}
  }

  updateCartItem = item =>
    this.setState(state => ({ items: { ...state.items, [item.id]: item } }))

  render() {
    const {
      View = 'div',
      Container = 'div',
      Text = 'p',
      CartItem = DefaultCartItem,
      empty,
      cart,
      loading,
      disabled,
      style,
      ...otherProps
    } = this.props

    const total =
      cart && cart.items ? cart.items.reduce(totalPriceReducer, 0) : 0
    const cartItems =
      cart &&
      cart.items &&
      cart.items.map((item, i) => (
        <CartItem
          key={i}
          item={this.state.items[item.id] || item}
          Text={Text}
          View={View}
          updateCartItem={this.updateCartItem}
        />
      ))

    if (loading) {
      return <Loader />
    }

    return (
      <View
        {...otherProps}
        style={[
          styles.cartContainer,
          { backgroundColor: empty ? '#ffffff' : '#ebebef' },
          style
        ]}
      >
        {!empty && (
          <Container>
            <Text style={styles.totalCost}>{`Total: ${formatPrice(
              total
            )}`}</Text>
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
