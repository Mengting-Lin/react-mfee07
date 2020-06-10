import React ,{ Fragment } from 'react';

function TodoItems(props){
    const {text, todos, setText, setTodos} = props.allProps;
    return(
        <Fragment>
            <div className="form-group">
                <label htmlFor="todoInput">輸入待辨事項</label>
                <input
                    id="todoInput"
                    className="form-control"
                    type="text"
                    value={text}
                    onChange={(event) => {
                    setText(event.target.value)
                    }}
                    onKeyPress={(event) => {
                    // 處理按下 Enter鍵
                    console.log(event.which)
                    if (event.which === 13 && event.target.value !== '') {
                        // https://keycode.info/
                        // 建立一個新的todo項目
                        const newTodoItem = {
                        id: +new Date(),
                        text: event.target.value,
                        completed: false,
                        }
    
                        // 建立新的todos陣列
                        const newTodos = [newTodoItem, ...todos]
    
                        // 設定新的todos，變動呈現的列表
                        setTodos(newTodos)
    
                        // 清空文字輸入框
                        setText('')
                    }
                    }}
                />

            </div>
        </Fragment>
    )
}

export default TodoItems;