import React, { PropTypes } from 'react'
import { Link } from 'react-router'

/**
 * application component
 */
export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor (props) {
    super(props)
    this.state = { value: 'something' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  render () {
    return (
      <div style={{ padding: 25 }}>
        <h3>Welcome to the Playground!</h3>
        <Link to='/dogs'>Load Async Route</Link>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        {this.props.children}
      </div>
    )
  }
}
