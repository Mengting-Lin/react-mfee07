// 類別型元件

import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  // 類別裡面的function
  handleClick(value) {
    this.setState({ total: this.state.total + value })
  }
}

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            // this指定至class App
            this.handleClick(1)
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.handleClick(-1)
          }}
        >
          -1
        </button>
      </>
    )
  }
}
}

export default App
