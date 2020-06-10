import React, { useState, Fragment, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/todo/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Conuter(props) {
    // console.log(props)
    const [total, setTotal] = useState(0);

    const spinner = (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )

    const [dataLoading, setDataLoading] = useState(false)

    const display = (
        <Fragment>
            <h1>{ total }</h1>
            <button 
                className=""
                onClick={()=>{
                    setTotal(total - 1);
                }}
            >add - </button>
            <button 
                className=""
                onClick={()=>{
                    setTotal(total + 1);
                }}
            >add + </button>
        </Fragment>
    )
    

    // componentDidMount 
    useEffect(() => {
        // 開啟指示(spinner)
        setDataLoading(true)
    
        //console.log(localStorage.getItem('total'))
    
        // 得到值(字串) !!重要
        const initTotal = localStorage.getItem('total') || '0'
        // 設定到total，轉為數字
        setTotal(Number(initTotal))
    
        // 1000ms(一秒後)關閉指示(spinner)
        setTimeout(() => {
            setDataLoading(false)
        }, 1000)
      }, []) // 注意這裡的第二個參數（空數組）。這將只運行一次。


    // componentDidUpdate
    useEffect(() => {
        // 開啟指示(spinner)
        setDataLoading(true)
    
        //console.log(localStorage.getItem('total'))
    
        // 設定值
        localStorage.setItem('total', total)
    
        // 1000ms(一秒後)關閉指示(spinner)
        setTimeout(() => {
            setDataLoading(false)
        }, 300)
      }, [total])  // 有 [total] 才是 componentDidUpdate 


    return (
        <Fragment>
            <MyBanner title="關於產品列表" lead="計數器頁面"/>
            <MyBreadcrumb/>

            <div className="container">
                {dataLoading ? spinner : display}
                </div>
            
        </Fragment>
    )
}

// 高階元件的用法
export default withRouter(Conuter)