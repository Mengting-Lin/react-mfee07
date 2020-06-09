import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Counter(props) {

  const [total, setTotal] = useState(0)
  // 計時器資料從localstorage來
  // const [total, setTotal] = useState(localStorage.getItem(count'')||0)
  const [dataLoading, setDataLoading] = useState(false)

  const spinner = (
      <div className='spinner-border text-primary' role="status">
          <span className="sr-only">Loading...</span>
      </div>
  )

  useEffect(() => {
    // 開啟指示(spinner)
    setDataLoading(true)

    //console.log(localStorage.getItem('total'))

    // 得到值(字串) !!重要
    const initTotal = localStorage.getItem('total') || '0'
    // 設定到total，轉為數字
    setTotal(+initTotal)

    // 1000ms(一秒後)關閉指示(spinner)
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [])

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
  }, [total])

  const display = (
    <>
        <h1>{total}</h1><button
          className="btn btn-primary"
          onClick={() => {
              setTotal(total + 1)
          }}
        >
        +1
        </button>
        <button
        className="btn btn-primary"
        onClick={() => {
            setTotal(total - 1)
        }}
        >
        -1
        </button>
    </>
  )


  return (
    <>
        <MyBanner title="計數器" lead="計數器頁面" />
        <MyBreadcrumb />
        <div className="container">{dataLoading ? spinner : display}</div>
    </>
  )
}

export default withRouter(Counter)