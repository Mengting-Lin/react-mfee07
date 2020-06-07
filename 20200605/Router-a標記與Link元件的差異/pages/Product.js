import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'

function Procuct(props){
    console.log(props);
    
    return (
        <>
            <MyBanner title="產品" lead="產品" />
            <h2>目前的產品編號是(從網址得上得到)：{props.match.params.id}</h2>
        </>
    )
}

export default withRouter(Procuct)