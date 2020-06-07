import React from 'react'

function MainContent(props) {
    return (
        <>
            <main role="main" className="flex-shrink-0">
                <div className="container">
                    <h1 className="mt-5">待辦事項</h1>
                    <hr />
                    { props.children }
                </div>
            </main>
        </>
    )
}

export default MainContent;