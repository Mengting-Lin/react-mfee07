import React from 'react'

class SelectBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  // 由於setState有異步的特性，若直接使用this.state.value無法取得setState後的值，故須採取下列兩種做法取得setState的值

  // 方法1：setState後的取更新後state值的策略-先保存值
  // -->建議作法，於function Component和class component兩種皆可適用

  handleChange = (value) => {
      const value = event.target.value
      //當屬性與變數相同時，可簡寫為{value}
      this.setState({value:value})
        // this.setState({value})
        // this.setState({;})
      console.log(value);      
  }


 // 方法2：setState後的取更新後state值的策略-callback

    // handleChange = (value) => {
    //     // 利用setState的第二個傳入參數(callback)，來得到更動state後的值
    //     this.setState({ value: event.target.value }, () => {
    //     console.log('in setState callback', this.state.value)
    //   })
  
    //   console.log('after setState', this.state.value)     
    // }

}

  render() {
    return (
      <>
        <select onChange={this.handleChange} value={this.state.value}>
            <option value="A" key={1}>A型</option>
            <option value="B" key={2}>B型</option>
            <option value="AB" key={3}>AB型</option>
            <option value="O" key={4}>O型</option>
        </select>
        <h1>{this.state.total}</h1>
      </>
    )
  }

export default App
