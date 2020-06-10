import React, { useState} from 'react';
// import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';

//https://www.react-reveal.com/docs/
// import Zoom from 'react-reveal/Zoom';

import MyIcon from './components/MyIcon';

function App(props) {
    
    // 內容
    // const [todos, setTodos] = useState(['打代碼？', '出去玩？']);
    // todos列表
    // todos = { id: 123213, text:'買牛奶', completed: false }
    const [todos, setTodos] = useState([
        {id:123456789, text:'打代碼？', compelted: false},
        {id:987654321, text:'出去玩？', compelted: false},
    ]);
    // 即將輸入的內容
    const [text, setText] = useState('')

    return (
        <>
            <MyNavBar/>
            <MyFooter/>

            {/* react-reveal */}
            {/* <Zoom>
                <p>Markup that will be revealed on scroll</p>
            </Zoom> */}

            {/* react-icons */}
            <MyIcon/>

            <main className="flex-shrink-0" role="main">
                <div className="container">
                    <h1 className="mt-5">代辦事項</h1>
                    <hr/>
                    <div>
                        <input 
                            type="text" 
                            value={text} 
                            onChange={(event) => {
                                setText(event.target.value)
                            }}
                            onKeyDown={(event)=>{
                                // console.log(event.keyCode);
                                if(event.keyCode === 13 && event.target.value !== "") {
                                    // 建立一個新物件
                                    const newTodoItem = {
                                        id: +new Date(),
                                        text: event.target.value,
                                        compelted: false
                                    }
                                    const newTodos = [newTodoItem, ...todos]
                                    // 設定新的todos，變動呈現的列表
                                    setTodos(newTodos)
                                    setText('')
                                }
                            }}
                        /><MyIcon/>
                    </div>
                    <div>
                        <ul>
                            { 
                                todos.map((value, index) => {
                                    let date = new Date(value.id)
                                    return (
                                        <li key={value.id}>
                                            {value.text}/{date.toLocaleString()}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App;