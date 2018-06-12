import React from 'react'
import { default as DefaultUpdateCartItem } from './UpdateCartItem'

const CartItem = ({
  item,
  Text = 'p',
  View = 'div',
  updateCartItem,
  UpdateCartItem = DefaultUpdateCartItem,
  ...otherProps
}) => {
  return (
    <View {...otherProps}>
      <Text>
        {item.name} - {item.price}
      </Text>
      <Text>{item.description}</Text>
      <UpdateCartItem item={item} updateCartItem={updateCartItem} />
    </View>
  )
}

export default CartItem
