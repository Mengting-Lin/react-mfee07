import React ,{ Fragment } from 'react';

function TodoDetail(props){
    const {value, handleCompleted, text, color, date} = props.allProps;
    return(
        <Fragment>
            <li
                className="list-group-item d-flex justify-content-between align-items-center"
                >
                <span style={{ color: color }}>
                    {value.text}
                </span>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                    handleCompleted(value.id)
                    }}
                >
                    {text}
                </button>
                <span className="badge badge-primary badge-pill">
                    {date.toLocaleString()}
                </span>
            </li>
        </Fragment>
    )
}

export default TodoDetail;