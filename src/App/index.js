import React, { PropTypes } from 'react'
import { Link } from 'react-router'

/**
 * application component
 */
export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div style={{ padding: 25 }}>
        <h3>Welcome to the Playground!!!!!</h3>
        <Link to='/dogs'>Load Async Route</Link>
        {this.props.children}
      </div>
    )
  }
}
