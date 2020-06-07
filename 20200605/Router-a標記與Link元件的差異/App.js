import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'
import TodoApp from './pages/TodoApp'
import Product from './pages/Product'

// import TodoAddForm from './components/todo/TodoAddForm'
// import TodoItem from './components/TodoItem'
// import TodoList from './components/todo/TodoList'

function App(){
  const [todos, setTodos] = useState([
    { id: 1591256594282, text: '買牛奶', completed: false, edited: false },
    { id: 1591256594281, text: '買iphone', completed: false, edited: true },
    { id: 1591256594283, text: '學react', completed: false, edited: false },
  ])

  return (
    <Router>
      <>
          <MyNavbar />
          <MainContent title="1213">
            {/* <Link to="/">首頁</Link>
            <Link to="/about">About</Link>
            <Link to="/todoapp">待辨</Link> */}
            
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/todoapp">
                <TodoApp todos={todos} setTodos={setTodos} />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/product/:id?">
                <Product />
              </Route>
            </Switch>
              
          </MainContent>
          <MyFooter />
      </>
    </Router>
  )
}


export default App