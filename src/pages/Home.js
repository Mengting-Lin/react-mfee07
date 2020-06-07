import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import MyBanner from '../components/MyBanner'

function Home(){
    return (
        <>
            {/* <h1>首頁</h1> */}
            <MyBanner title="首頁" lead="首頁是一個網站第一個看到的頁面" />
            <div>
                <a href="/">Home- a tag</a>
                <hr />
                <Link to="/">Home- a Router Link</Link>
            </div>
        </>
    )
}

export default Home