import React from 'react'
import * as defaults from '../defaults'

const UpdateCartItem = ({
  item,
  updateCartItem,
  Button = defaults.Button,
  Text = defaults.Text,
  ...otherProps
}) => {
  return updateCartItem ? (
    <React.Fragment>
      <Button
        {...otherProps}
        disabled={item.amount <= 0}
        onClick={() => updateCartItem({ ...item, amount: item.amount - 1 })}
      >
        -
      </Button>
      <Text>{item.amount}</Text>
      <Button
        {...otherProps}
        onClick={() => updateCartItem({ ...item, amount: item.amount + 1 })}
      >
        +
      </Button>
    </React.Fragment>
  ) : (
    <Text>{item.amount}</Text>
  )
}

export default UpdateCartItem
