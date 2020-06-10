import React from 'react'
import { Link } from 'react-router-dom'

import MyBanner from '../components/todo/MyBanner'


function Home() {
    return (
        <>
        
        <MyBanner title="首頁" lead="首頁是一個網站的第一個看到的頁面"/>
        <div>
            <a href="/about">About a page/一般超連結 A </a>
            <hr/>
            <Link to="/ablout">About a page/eact-router-dom的 LInk</Link>
        </div> 
        </>
    )
}

export default Home