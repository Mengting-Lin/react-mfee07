// 類別型元件

import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
    // **
    this.handleClick = this.handleClick.bind(this)
  }

  // 類別裡面的function
  // 未使用箭頭函式時，這裡的this.setState不會自動綁定
  // 觸發事件可呼叫handleClick func，但無法找到this.setState，須於contructor最下方加上**
  handleClick() {
    this.setState({ total: this.state.total + 1 })
  }
}

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button onClick={this.handleClick}>+1</button>
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
