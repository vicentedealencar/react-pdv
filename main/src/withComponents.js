import React from 'react'
import componentsContext from './componentsContext'
import defaults from './defaults'

const { Consumer } = componentsContext
export default function withComponents(WrappedComponent) {
  class WithComponents extends React.Component {
    render() {
      const { components, ...passedProps } = this.props
      return (
        <Consumer>
          {contextComponents => {
            const passedComponents = {
              ...defaults,
              ...contextComponents,
              ...components
            }
            return (
              <WrappedComponent
                {...passedProps}
                components={passedComponents}
              />
            )
          }}
        </Consumer>
      )
    }
  }
  WithComponents.displayName = `WithComponents(${getDisplayName(
    WrappedComponent
  )})`
  return WithComponents
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
