import React from 'react'
import { Button } from '../src'

export default class extends React.Component {
  state = {
    loading: false
  }

  showAlert() {
    this.setState({ loading: false })
    alert('🎉🎉🎉')
  }

  onClick = () => {
    this.setState({ loading: true })
    setTimeout(() => this.showAlert(), 3000)
  }

  render() {
    const { loading } = this.state
    const style = loading ? disabledStyle : regularStyle

    return (
      <Button
        button="button"
        onClick={this.onClick}
        loading={loading}
        style={style}
      >
        {loading ? 'Loading...' : 'With timeout'}
      </Button>
    )
  }
}

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
