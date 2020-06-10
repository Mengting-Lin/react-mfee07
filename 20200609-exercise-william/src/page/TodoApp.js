import React, { useState } from 'react'

import TodoAddFrom from '../components/todo/TodoAddFrom'
import TodoList from '../components/todo/TodoLIst'

import MyBanner from '../components/todo/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function TodoApp(props) {
    // todos列表
    // todo = { id: 123213, text:'買牛奶', completed: false, edited: false }
    // const [todos, setTodos] = useState([
    //     { id: 1591256594282, text: '買牛奶', completed: false, edited: false },
    //     { id: 1591256594281, text: '買iphone', completed: false, edited: false },
    //     { id: 1591256594283, text: '學react', completed: false, edited: false },
    // ])
    const {todos, setTodos} =props;
    // 用於文字輸入框輸入新的todo
    const [text, setText] = useState('')

    // 利用id值尋找符合的todos裡的index，然後改變completed
    const handleCompleted = (id) => {
        const newTodos = [...todos]

        const todoItemIndex = todos.findIndex((v, i) => v.id === id)

        if (todoItemIndex !== -1) {
            newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
            setTodos(newTodos)
        }
    }

    // 利用id值尋找符合的todos裡的index，然後改變edited值
    const handleEditedToggle = (id) => {
        const newTodos = [...todos]

        const todoItemIndex = todos.findIndex((v, i) => v.id === id)

        if (todoItemIndex !== -1) {
        newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited
        setTodos(newTodos)
        }
        
        console.log(newTodos[todoItemIndex])
        // fetch 
        fetch(`http://localhost:5555/items/${id}`,  {
            method: 'PUT',
            body: JSON.stringify(newTodos[todoItemIndex]),
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })
        // .then((response)=>{
        //     return response.json()
        // })
        // .then((response)=>{
        //     // setTodos([response,...todos])
        //     // console.log(response);
        //     console.log(todos);
        // })


    }

    // 利用id值尋找符合的todos裡的index，然後改變text值
    const handleEditedSave = (id, text) => {
        const newTodos = [...todos]

        const todoItemIndex = todos.findIndex((v, i) => v.id === id)

        if (todoItemIndex !== -1) {
            newTodos[todoItemIndex].text = text
            setTodos(newTodos)
        }

        handleEditedToggle(id)
    }

    // 把成員直接從陣列中刪除
    const handleDelete = (id) => {
        const newTodos = todos.filter((v, i) => v.id !== id)

        setTodos(newTodos)
        fetch(`http://localhost:5555/items/${id}`,  {
            method: 'DELETE',
            body: JSON.stringify(newTodos[id]),
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })
    }

    return (
        <> 
            <MyBanner title="代辦項目" lead="代辦項目是todoitems"/>
            <MyBreadcrumb/>
            <TodoAddFrom
                text={text}
                todos={todos}
                setText={setText}
                setTodos={setTodos}
                allProps={{
                            text,
                            todos,
                            setText,
                            setTodos,
                        }}
            />
            <TodoList
                // todos={todos}
                // setTodos={setTodos}
                // handleCompleted={handleCompleted}
                // handleDelete={handleDelete}
                // handleEditedToggle={handleEditedToggle}
                // handleEditedSave={handleEditedSave}
                allProps= {{
                    todos,
                    setTodos,
                    handleCompleted,
                    handleDelete,
                    handleEditedToggle,
                    handleEditedSave
                }}
            />
        </>
    )
}

export default TodoApp