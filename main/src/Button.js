import React from 'react'
import { Defaults } from './index'

export default class Button extends React.PureComponent {
  render() {
    const {
      BaseButton: B = Defaults.BaseButton,
      loading,
      disabled = false,
      title,
      ...otherProps
    } = this.props

    return (
      <B
        {...otherProps}
        title={title || this.props.children || ''}
        disabled={loading || disabled}
      >
        {this.props.children}
      </B>
    )
  }
}
