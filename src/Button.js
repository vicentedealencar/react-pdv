import React from 'react'

export class Button extends React.Component {
  render() {
    const { button: B, loading, disabled, ...otherProps } = this.props
    return (
      <B {...otherProps} disabled={loading || disabled}>
        {this.props.children}
      </B>
    );
  }
}

export default Button
