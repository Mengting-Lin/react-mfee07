import React ,{useEffect} from 'react';

function TodoAddFrom(props){
    // console.log(props)
    // const {text, todos, setTodos, setText} = props;
    const {text, todos, setTodos, setText} = props.allProps;

    // async
    async function addFromServer(todosValue) {
        console.log(todosValue)
        const request = new Request('http://localhost:5555/items', {
            method: 'POST',
            body:JSON.stringify(todosValue),
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })
        const response = await fetch(request)
        const data = await response.json()
        console.log(data)
        const todoData = [...todos, data]
        // const todoData = [...todos]
        // todoData.push(data)
        setTodos(todoData)
    }

    useEffect(()=>{
        // addFromServer()
    },[])

    return(
        <>
            <div className="form-group">
                <label htmlFor="todoInput">輸入待辨事項</label>
                <input
                    id="todoInput"
                    className="form-control"
                    type="text"
                    value={text}
                    placeholder="請輸入完畢後按下enter！which:13"
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
                            // fetch 
                            // fetch('http://localhost:5555/items',  {
                            //     method: 'POST',
                            //     body:JSON.stringify(newTodoItem),
                            //     headers: new Headers({
                            //         Accept: 'application/json',
                            //         'Content-Type': 'application/json',
                            //     }),
                            // })
                            // .then((response)=>{
                            //     return response.json()
                            // })
                            // .then((response)=>{
                            //     // setTodos([response])
                            //     console.log(response);
                            // })



                            // 建立新的todos陣列
                            const newTodos = [newTodoItem, ...todos]
        
                            // 設定新的todos，變動呈現的列表
                            setTodos(newTodos)
        
                            // 清空文字輸入框
                            setText('')
                            addFromServer(newTodoItem)
                        }
                    }}
                />
            </div>
        </>
    )
}
export default TodoAddFrom