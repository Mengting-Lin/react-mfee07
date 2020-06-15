import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

function Index() {

    return (
        <>
          <div className="container">{dataLoading ? spinner : display}</div>
        </>
      )
}

export default Index