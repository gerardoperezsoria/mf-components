// import React from 'react'
// import styles from './styles.module.css'

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ColoredHeadingTwo extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  }

  render() {
    const { text, color } = this.props
    return <h1 style={{ color }}> {text}</h1>
  }
}

export class ColoredHeadingOne extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  }

  render() {
    const { text, color } = this.props
    return <h1 style={{ color }}> {text}</h1>
  }
}
