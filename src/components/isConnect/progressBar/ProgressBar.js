import React, { useState } from 'react'

const ProgressBar = ({question, percent}) => {
  return (
    <>
      <div className="progressBar">
        <div className="progressBarChange" style={{width:percent+"%"}}></div>
      </div>
      <div className="percentage">
        <div className="progressPercent">Question: {question}/10</div>
        <div className="progressPercent">Progression: {percent}%</div>
      </div>
    </>
  )
}

export default ProgressBar