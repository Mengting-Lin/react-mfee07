import React from 'react'

function TodoItem(props){
    const {value, handleCompleted, handleDelete, handleEditedToggle} = props                
    const date = new Date(value.id)

    const cssClasses = value.completed
    ? 'list-group-item d-flex justify-content-between align-items-center list-group-item-danger'
    : 'list-group-item d-flex justify-content-between align-items-center'

    return (
        <>
            <li 
                // key={value.id}
                className={cssClasses}
            >
                {value.text}

                <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                    handleEditedToggle(value.id)
                }}
                >
                編輯
                </button>
                
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                        handleDelete(value.id)
                    }}
                >
                刪除
                </button>

                <button 
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                        handleCompleted(value.id)
                    }}
                >
                    {/* 完成 */}
                    {value.completed ? '取消完成' : '完成工作'}
                </button>

                <span className="badge badge-primary badge-pill">
                    ⌚{date.toLocaleString()}
                </span>
                
            </li>
        </>
    )
}

export default TodoItem