import React from 'react'
import * as defaults from './defaults'

export default class Button extends React.PureComponent {
  render() {
    const {
      component: B = defaults.ButtonBase,
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
