import React ,{Fragment} from 'react'

// import MyNavBar from '../comp/MyNavBar';
import TodoItems from '../comp/todo/TodoItems';
import TodoLIst from '../comp/todo/TodoLIst';
import MainContent from '../comp/MainContent';

function TodoApp(props) {

    const { text, todos, setText, setTodos, handleCompleted} = props.allProps;
    return (
        <Fragment>
            <MainContent title={"lemon測試"}>
                <TodoItems
                    allProps={{
                        text,
                        todos,
                        setText,
                        setTodos
                    }}
                />

                <TodoLIst
                    allProps={{
                        todos,
                        handleCompleted,
                    }}
                />
            </MainContent>
        </Fragment>
    )
}

export default TodoApp;