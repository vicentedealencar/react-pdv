import React from 'react'
import numeral from 'numeral'
import * as defaults from '../defaults'

const CartItem = ({
  item,
  Text = defaults.Text,
  View = defaults.View,
  Button = defaults.Button,
  updateCartItem,
  UpdateCartItem = defaults.UpdateCartItem,
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
      <UpdateCartItem
        item={item}
        updateCartItem={updateCartItem}
        Button={Button}
        Text={Text}
      />
    </View>
  )
}

export default CartItem
