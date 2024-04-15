import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNum = () => {
    const x = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: x}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Count {count}</h1>
          {count % 2 === 0 && <p className="even-odd">Count is Even</p>}
          {count % 2 !== 0 && <p className="even-odd">Count is Odd</p>}
          <button className="button" onClick={this.randomNum} type="button">
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
