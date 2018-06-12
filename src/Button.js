import React from 'react'
import invariant from 'invariant'

export default class Button extends React.PureComponent {
  render() {
    const { component: B, loading, disabled, ...otherProps } = this.props

    invariant(B, 'Button expect a Component as a prop called button')
    return (
      <B {...otherProps} disabled={loading || disabled}>
        {this.props.children}
      </B>
    )
  }
}
