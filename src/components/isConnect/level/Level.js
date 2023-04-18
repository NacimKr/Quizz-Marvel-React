import React, { useState } from 'react'

const Level = (props) => {

  const [indexLevel, setIndexLevel] = useState(1)

  return (
    <div className="levelsContainer">
      <h2 className="headingLevels"></h2>
    </div>
  )
}

export default Level