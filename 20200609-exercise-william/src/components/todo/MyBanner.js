import React from 'react'

function MyBanner(props) {
    const { title, lead } = props;
    return (
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{lead}</p>
            </div>
        </div>
        </>
    )
}

export default MyBanner