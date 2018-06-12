import React from 'react'
import invariant from 'invariant'
import Button from './Button'

const Stringify = ({ product, Text }) => (
  <Text>{JSON.stringify(product, null, 2)}</Text>
)

const DefaultCartItem = ({ product, Text, View }) => (
  <View>
    <Text>
      {product.name} - {product.price}
    </Text>
  </View>
)

const identity = x => x
const formatPrice = x => parseFloat(x).toFixed(2)
const createSumReducer = (selector = identity) => (acc, curr) =>
  acc + selector(curr)
const totalPriceReducer = createSumReducer(x => x.price)
const onContinue = () => alert('🎉🎉🎉')

export default class Cart extends React.PureComponent {
  render() {
    const {
      View,
      Container,
      Text,
      CartItem: propsCartItem,
      empty,
      cart,
      loading,
      disabled,
      style,
      ...otherProps
    } = this.props
    const CartItem = propsCartItem || DefaultCartItem

    invariant(
      View && Container && Text && CartItem,
      'Cart expect a Component as a prop called button'
    )

    const total =
      cart && cart.items ? cart.items.reduce(totalPriceReducer, 0) : 0
    const cartItems =
      cart &&
      cart.items &&
      cart.items.map((product, index) => (
        <CartItem key={index} product={product} Text={Text} View={View} />
      ))

    if (loading) {
      return <Loader />
    }

    return (
      <View
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
