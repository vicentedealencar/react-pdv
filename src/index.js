import React from 'react'

export class Button extends React.Component {
  render() {
    console.log('0')
    const { button: B, ...otherProps } = this.props
    return (
      <B {...otherProps}>
        {this.props.children}
      </B>
    );
  }
}

export default Button
