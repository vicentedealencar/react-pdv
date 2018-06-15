import React from 'react'
import { defaults } from '../src'
import BasicCart from './Cart.basic.example'

const DropdownUpdateCartItem = ({ item, updateCartItem, ...otherProps }) => {
  const options = Array.from({ length: 10 })
    .map((_, i) => i)
    .map(x => (
      <option key={x} value={x}>
        {x}
      </option>
    ))
  return (
    <select
      value={item.amount}
      onChange={x => updateCartItem({ ...item, amount: x.target.value })}
    >
      {options}
    </select>
  )
}

export default class extends React.Component {
  render() {
    return <BasicCart UpdateCartItem={DropdownUpdateCartItem} />
  }
}
