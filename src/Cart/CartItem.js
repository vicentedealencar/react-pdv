import React from 'react'
import numeral from 'numeral'
import { default as DefaultUpdateCartItem } from './UpdateCartItem'

const CartItem = ({
  item,
  Text = 'p',
  View = 'div',
  updateCartItem,
  UpdateCartItem = DefaultUpdateCartItem,
  ...otherProps
}) => {
  const price = numeral(item.price)
    .multiply(item.amount)
    .format()

  return (
    <View {...otherProps}>
      <Text>
        {item.name} - {price}
      </Text>
      <Text>{item.description}</Text>
      <UpdateCartItem item={item} updateCartItem={updateCartItem} />
    </View>
  )
}

export default CartItem
