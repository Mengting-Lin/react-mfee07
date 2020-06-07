import React from 'react'
import { withRouter } from 'react-router-dom'



function About(props) {
    return (
        <>
            <h1>About.js</h1>
        </>
    )
}

// 高階元件的用法
export default withRouter(About)