import React from 'react'
import invariant from 'invariant'

export default class Button extends React.PureComponent {
  render() {
    const {
      component: B = 'button',
      loading,
      disabled,
      ...otherProps
    } = this.props

    return (
      <B {...otherProps} disabled={loading || disabled}>
        {this.props.children}
      </B>
    )
  }
}
