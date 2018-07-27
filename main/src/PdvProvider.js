import React from 'react'
import componentsContext from './componentsContext'
import defaults from './defaults'
const { Provider } = componentsContext

export default class PdvProvider extends React.PureComponent {
  // static state = {
  //     components: null
  // }

  // static getDerivedStateFromProps(props, state) {
  //     return {
  //         ...state,
  //         ...props
  //     }
  // }
  constructor(props) {
    super(props)
    const { components } = props
    this.state = {
      components: {
        ...defaults,
        ...components
      }
    }
  }

  render() {
    const { children } = this.props
    const { components } = this.state
    return <Provider value={components}>{children}</Provider>
  }
}
