import React from 'react'
import { default as DefaultButton } from '../Button'

const updateCartItem = ({
  item,
  updateCartItem,
  Button = DefaultButton,
  Text = 'p',
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

export default updateCartItem
