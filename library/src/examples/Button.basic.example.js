import React from 'react'
import { Button } from 'react-pdv'

const defaultText = 'Basic button'
const defaultOnClick = () => alert('🎉🎉🎉')

export default ({
  style,
  children = defaultText,
  onClick = defaultOnClick,
  ...otherProps
}) => (
  <Button {...otherProps} onClick={onClick} style={{ ...basicStyle, ...style }}>
    {children}
  </Button>
)

const basicStyle = {
  backgroundColor: '#770077',
  color: '#fff',
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 15,
  paddingLeft: 15,
  minHeight: 50,
  minWidth: 50,
  borderColor: 'black',
  borderWidth: 5,
  borderRadius: 25
}
