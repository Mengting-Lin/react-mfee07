import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import TodoApp from './pages/TodoApp'


import MyNavBar from './comp/MyNavBar';

// 函式元件
function App() {
    // todos列表
    // todo = { id: 123213, text:'買牛奶', completed: false }
    const [todos, setTodos] = useState([
        { id: 1591270635945, text: '買牛奶', completed: false },
        { id: 1591256594281, text: '買iphone', completed: false },
        { id: 1591256594283, text: '學react', completed: false },
    ])
    
    // 用於文字輸入框輸入新的todo
    const [text, setText] = useState('')

    // 利用id值尋找符合的todos裡的index，然後改變completed
    const handleCompleted = (id) => {
        const newTodos = [...todos]
    
        const todoItemIndex = todos.findIndex((v, i) => v.id === id) // 返回 索引值 
    
        if (todoItemIndex !== -1) {
            newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
            setTodos(newTodos)
        }
    }

    return (
        <Router>
            <>
                <MyNavBar/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/todoapp">
                        <TodoApp 
                            allProps={{
                                text,
                                todos,
                                setText,
                                setTodos,
                                handleCompleted,
                            }}
                        />
                    </Route>
                </Switch>
            </>
        </Router>
    )
}

export default App