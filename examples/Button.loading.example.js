import React from 'react'
import Button from './Button.basic.example'
import { State } from '@compositor/kit'

const onClick = (update, i) => () => {
  update({ loading: true })
  setTimeout(() => {
    update({ loading: false, i: i + 1 })
  }, 1000)
}

export default () => (
  <State
    loading={false}
    i={0}
    render={({ update, loading, i }) => (
      <Button
        onClick={onClick(update, i)}
        loading={loading}
        style={loading ? disabledStyle : regularStyle}
      >
        {loading ? 'Loading...' : 'Delayed counter: ' + i}
      </Button>
    )}
  />
)

const regularStyle = {
  backgroundColor: '#000077',
  width: 300
}

const disabledStyle = {
  ...regularStyle,
  backgroundColor: '#777'
}
