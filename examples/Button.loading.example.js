import React from 'react'
import { Button } from '../src'
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
        component="button"
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
  backgroundColor: '#770077',
  color: '#fff',
  paddingTop: 10,
  paddingBottom: 10,
  width: 300,
  textAlign: 'center',
  border: '5px solid black',
  borderRadius: 20
}

const disabledStyle = {
  ...regularStyle,
  ...{
    backgroundColor: '#777'
  }
}
