import React ,{ Fragment } from 'react';
import TodoDetail from './TodoDetail';

function TodoLIst(props){
    const {todos, handleCompleted} =props.allProps;
    return(
        <Fragment>
            <div>
                <ul className="list-group">
                    {todos.map((value, index) => {
                    // 利用id即為加入的時間日期
                    const date = new Date(value.id)
                    if (value.completed) {
                        return (
                            <TodoDetail
                                key={value.id}
                                allProps={{
                                    value,
                                    handleCompleted,
                                    date,
                                    color:'red',
                                    text:'取消完成',
                                }}
                            />
                        )
                    } else {
                        return (
                            <TodoDetail
                                key={value.id}
                                allProps={{
                                    value,
                                    handleCompleted,
                                    date,
                                    text:'完成',
                                    color:'#000'
                                }}
                            />
                        )
                    }
                    
                    })}
                </ul>
            </div>
        </Fragment>
    )
}

export default TodoLIst;