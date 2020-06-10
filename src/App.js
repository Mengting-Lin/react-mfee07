import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'
import TodoApp from './pages/TodoApp'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'

import NotFoundPage from './pages/NotFoundPage'
import MemberLogin from './pages/MemberLogin'
import CounterJSONServer from './pages/CounterJSONServer'

import ProtectedRoute from './utils/ProtectedRoute'
import Counter from './pages/Counter'


// import TodoAddForm from './components/todo/TodoAddForm'
// import TodoItem from './components/TodoItem'
// import TodoList from './components/todo/TodoList'

function App(props){
  // const [todos, setTodos] = useState([
  //   { id: 1591256594282, text: '買牛奶', completed: false, edited: false },
  //   { id: 1591256594281, text: '買iphone', completed: false, edited: true },
  //   { id: 1591256594283, text: '學react', completed: false, edited: false },
  // ])

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // 錯誤訊息陣列
  const [loginErrors, setLoginErrors] = useState([])
  // 認證登入狀態(會員是否登入狀態)
  const [auth, setAuth] = useState(false)

  // 處理會員登入
  const loginProcess = (loginSuccessCallback) => {

    const errors = []

    // 檢查錯誤
    if (name==='') errors.push('姓名沒填')
    if (username==='') errors.push('帳號沒填')
    if (password==='') errors.push('密碼沒填')

    if (errors.length > 0) {
      setLoginErrors(errors)
      return
    }

    // 必要！--> 清空錯誤訊息陣列 + 登入
    setLoginErrors([])
    setAuth(true)

    // 執行成功的callback(來自MemberLogin)
    loginSuccessCallback()
  }

  const logoutProcess = (logoutSuccessCallback) => {
    setName('')
    setUsername('')
    setPassword('')

    // 認証改為false
    setAuth(false)

    // 執行成功的callback(來自MemberLogin)
    logoutSuccessCallback()
  }

  return (
    <Router>
      <>
          <MyNavbar auth={auth} name={name} />
          <MainContent>
            {/* <Link to="/">首頁</Link>
            <Link to="/about">About</Link>
            <Link to="/todoapp">待辨</Link> */}
            
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/memberlogin">
              <MemberLogin 
                name={name} 
                setName={setName}
                username={username}                
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                loginProcess={loginProcess}
                logoutProcess={logoutProcess}
                loginErrors={loginErrors}
                auth={auth}
              />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/counterjson">
                <CounterJSONServer />
              </Route>
              <Route path="/counter">
                <Counter />
              </Route>
              <ProtectedRoute path="/todoapp">
                <TodoApp 
                  // todos={todos} 
                  // setTodos={setTodos} 
                  isAuth={auth}                  
                />
              </ProtectedRoute>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/product/:type?/:id?">
                <Product />
              </Route>
              <Route path="/productlist">
                <ProductList />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
              
          </MainContent>
          <MyFooter />
      </>
    </Router>
  )
}


export default App