import React from 'react'
import { Button } from '../src'

const onClick = () => alert('🎉🎉🎉')

export default props => (
  <Button component="button" style={style} onClick={onClick}>
    I am a button, please click me
  </Button>
)

const style = {
  backgroundColor: '#770077',
  color: '#fff',
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 100,
  paddingLeft: 100,
  border: '5px solid black',
  borderRadius: 20
}
