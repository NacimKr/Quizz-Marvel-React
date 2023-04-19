import React, { useState } from 'react'

const Level = (props) => {
  return (
    <div className="levelsContainer">
      <h2 className="headingLevels">{props.level}</h2>
    </div>
  )
}

export default Level