// 類別型元件

import React from 'react'

// App是自定義元件，繼承React.Component(React內建)屬性，因此擁有react中state/props
class App extends React.Component {
  // 建構式只會在元件一開始執行一遍
  constructor() {
    // 第一行一定要有super()，用來呼叫React.Component建構式
    super()
    // 設定state初始值
    this.state = {
      total: 0,
    }
  }

  // 若要載入React內建props，則在constructor及super中引入props
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //     total: 0,
  //     }
  // }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -1
        </button>
      </>
    )
  }
}

export default App
