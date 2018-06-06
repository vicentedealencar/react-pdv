import React from 'react'
import { Button } from '../src'
import { State } from '@compositor/kit'

const onClick = update => () => {
  update({ loading: true })
  setTimeout(() => {
    update({ loading: false })
    alert('🎉🎉🎉')
  }, 1500)
}

export default () => (
  <State
    loading={false}
    render={({ update, loading }) => (
      <Button
        button="button"
        onClick={onClick(update)}
        loading={loading}
        style={loading ? disabledStyle : regularStyle}
      >
        {loading ? 'Loading...' : 'With timeout'}
      </Button>
    )}
  />
)

const regularStyle = {
  backgroundColor: '#770077',
  color: '#fff',
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 100,
  paddingLeft: 100,
  border: '5px solid black',
  borderRadius: 20
}

const disabledStyle = {
  ...regularStyle,
  ...{
    backgroundColor: '#777'
  }
}
