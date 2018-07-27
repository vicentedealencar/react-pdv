import React from 'react'
import withComponents from './withComponents'

class Button extends React.PureComponent {
  render() {
    const {
      loading,
      disabled = false,
      title,
      components,
      ...otherProps
    } = this.props
    const { BaseButton } = components

    return (
      <BaseButton
        {...otherProps}
        title={title || this.props.children || ''}
        disabled={loading || disabled}
      >
        {this.props.children}
      </BaseButton>
    )
  }
}

export default withComponents(Button)
