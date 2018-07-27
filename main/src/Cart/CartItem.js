import React from 'react'
import format from '../format'
import withComponents from '../withComponents'

const CartItem = ({ item, updateCartItem, components, ...otherProps }) => {
  const { Text, View, Button, UpdateCartItem } = components

  const price = format(item.price * item.amount)

  return (
    <View {...otherProps}>
      <UpdateCartItem
        item={item}
        updateCartItem={updateCartItem}
        components={components}
      />
      <Text>
        {item.name} - {price}
      </Text>
    </View>
  )
}

export default withComponents(CartItem)
