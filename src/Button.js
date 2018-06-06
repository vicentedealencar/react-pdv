import React from 'react'
import invariant from 'invariant'

export class Button extends React.Component {
  render() {
    const { button: B, loading, disabled, ...otherProps } = this.props

    invariant(B, 'Button expect a Component as a prop called button')
    return (
      <B {...otherProps} disabled={loading || disabled}>
        {this.props.children}
      </B>
    )
  }
}

export default Button
