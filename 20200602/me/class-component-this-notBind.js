// 類別型元件

import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
    // 這種方法不需要自行綁定
    // this.handleClick = this.handleClick.bind(this)
  }

  // 類別裡面的function
  // 建議寫法：似箭頭函式
  handleClick = () => {
    this.setState({ total: this.state.total + 1 })
  }
  // 雙箭頭
  // handleClick = (value) => () => {
  //   this.setState({ total: this.state.total + value })
  // }
}

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        {/* 似箭頭函式 */}
        <button onClick={this.handleClick}>+1</button>
        <button onClick={this.handleClick}>-1</button>
        {/* 雙箭頭
        <button onClick={this.handleClick(1)}>+1</button>
        <button onClick={this.handleClick(-1)}>-1</button> */}
      </>
    )
  }
}
}

export default App
