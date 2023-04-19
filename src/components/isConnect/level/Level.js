import React, { useEffect, useState } from 'react'
import Stepper from 'react-stepper-horizontal';

const Level = (props) => {
  console.log( props.levelQuizz < 3 ? props.levelQuizz : props.levelQuizz=0 )
  return (
    <div className="levelsContainer">
      <Stepper 
        style={{backgroundColor:"red"}}
        steps={[
          {title: "Debutant"},
          {title: "Confirmé"},
          {title: "Expert"},
        ]} 
        activeStep={ props.levelQuizz } 
        activeColor={"#ba1313"}
        defaultColor={"#ccb4b4"}
        completeColor={"#ba1313"}
        completeBarColor={"#ba1313"}
      />
    </div>
  )
}

export default Level