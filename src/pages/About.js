import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function About(){
    return (
        <>
            {/* <h1>關於我們</h1> */}
            <MyBanner title="About" lead="About" />
            <MyBreadcrumb />
            <div>
                <a href="/about">About- a tag</a>
                <hr />
                <Link to="/about">About- a Router Link</Link>
            </div>
        </>
    )
}

export default withRouter(About)
