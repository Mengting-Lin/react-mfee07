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
  handleClickAfterSeconds = (value) => {
    setTimeout(()=>{
        console.log(this);        
        this.setState({ total: this.state.total + value })
    },1000)
    // 下方匿名函式需改為箭頭函式，this方可正確指向最近
    // setTimeout(function(){
    //     console.log(this);        
    //     // 回調函式中this指向window
    //     this.setState({ total: this.state.total + value })
    // },1000)
  }

  handleClickEverySecond = (value) => {    
    setInterval(()=>{       
        this.setState({ total: this.state.total + value })
    },1000)
  }
}

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button onClick={()=>{this.handleClickAfterSeconds(1)}>+1</button>
        <button onClick={()=>{this.handleClickAfterSeconds(-1)}>-1</button>
      </>
    )
  }
}
}

export default App
