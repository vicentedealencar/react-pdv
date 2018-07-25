import React from 'react'
import numeral from 'numeral'
import { Defaults } from '../index'

const CartItem = ({
  item,
  Text = Defaults.Text,
  View = Defaults.View,
  Button = Defaults.Button,
  updateCartItem,
  UpdateCartItem = Defaults.UpdateCartItem,
  ...otherProps
}) => {
  const price = numeral(item.price)
    .multiply(item.amount)
    .format()

  return (
    <View {...otherProps}>
      <UpdateCartItem
        item={item}
        updateCartItem={updateCartItem}
        Button={Button}
        Text={Text}
      />
      <Text>
        {item.name} - {price}
      </Text>
    </View>
  )
}

export default CartItem
