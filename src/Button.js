import React from 'react'
import { Defaults } from './index'

export default class Button extends React.PureComponent {
  render() {
    const {
      BaseButton: B = Defaults.ButtonBase,
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
