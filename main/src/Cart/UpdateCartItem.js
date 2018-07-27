import React from 'react'
import withComponents from '../withComponents'

const UpdateCartItem = ({ item, updateCartItem, components }) => {
  const { Button, Text } = components
  return updateCartItem ? (
    <React.Fragment>
      <Button
        disabled={item.amount <= 0}
        onClick={() => updateCartItem({ ...item, amount: item.amount - 1 })}
      >
        -
      </Button>
      <Text>{item.amount}</Text>
      <Button
        onClick={() => updateCartItem({ ...item, amount: item.amount + 1 })}
      >
        +
      </Button>
    </React.Fragment>
  ) : (
    <Text>{item.amount}</Text>
  )
}

export default withComponents(UpdateCartItem)
