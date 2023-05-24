import React from 'react'

import style from "../../Common/Loading/Loading.module.css"

const Loading = () => {
  return (
    <div>
      <div className="h-screen bg-gray-50 ">
        <div className={style.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Loading