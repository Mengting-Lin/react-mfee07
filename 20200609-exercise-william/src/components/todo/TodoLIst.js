import React ,{useEffect} from 'react';
import TodoItem from './TodoItem';
import TodoItemEditForm from './TodoItemEditForm';

function TodoLIst(props){
    // console.log(props)  
    
    const { 
        todos,
        setTodos,
        handleCompleted,
        handleDelete,
        handleEditedToggle,
        handleEditedSave } = props.allProps; // es6 
    // console.log(todos)

    // componentDidmount 
    useEffect(()=>{
        fetch('http://localhost:5555/items',  {
            method: 'get',
            // body: JSON.stringify(todos),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
        })
        .then((response)=>{
            return response.json()
        })
        .then((response)=>{
            setTodos(response)
            console.log(todos);
        })
    },[])


    return(
        <>
            <div>
                <ul className="list-group">
                    {todos.map((value, index) => {
                        // 編輯 edited =true 
                        if (value.edited) {
                            return (
                                <TodoItemEditForm
                                    key={value.id}
                                    value={value}
                                    handleEditSave={handleEditedSave}
                                />
                            )
                        }
                        // 編輯 edited =false 改用 TodoItem
                        return (
                            <TodoItem
                                key={value.id}
                                value={value}
                                handleCompleted={handleCompleted}
                                handleDelete={handleDelete}
                                handleEditedToggle={handleEditedToggle}
                            />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default TodoLIst;