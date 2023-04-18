import React from 'react'
import LogoBatman from "../../images/batman.png"

const ErrorPage = () => {
  return (
    <div className="quiz-bg">
      <div className="container">
        <img src={LogoBatman} alt="" style={{width:"500px", display:"block", margin:"0 auto"}} />
        <h3 style={{textAlign:"center"}}>Page non existante</h3>
      </div>
    </div>
  )
}

export default ErrorPage