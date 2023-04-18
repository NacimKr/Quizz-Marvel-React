import React, { useEffect, useState } from 'react'
import Level from "../isConnect/level/Level";
import ProgressBar from "../isConnect/progressBar/ProgressBar";
import QuizzMarvel from "../../quizzMarvel/quizzMarvel";

const Quizz = () => {

  const [levelNames, setLevelNames] = useState(['debutant', "confirme", "expert"]);
  const [indexLevel, setIndexLevel] = useState(0);
  const [question, setQuestions] = useState("")
  const [maxQuestion, setMaxQuestions] = useState(10)
  const [storedQuestion, setStoredQuestions] = useState([]);
  const [answers, setAnswers] = useState("");
  const [BtnDisabled, setBtnDisabled] = useState(true)

  const lodalLevelName = level => QuizzMarvel[0].quizz[level]
 
  useEffect(()=> {
    const fetchedArrayQuizz = lodalLevelName(levelNames[indexLevel])
    setStoredQuestions(fetchedArrayQuizz)
  },[])

  console.log(storedQuestion[indexLevel])

  const handleMouse = (e) => {
    setAnswers(e.target.innerText);
    setBtnDisabled(false)
    e.target.classList.add('selectAnswer')
  }

  return (
    <div>
      <Level  />
      <ProgressBar question={indexLevel + 1} />
      <h2>{storedQuestion[indexLevel]?.question}</h2>
      {
        storedQuestion[indexLevel]?.options.map((option, index) => {
          return(
            <div 
              onClick={handleMouse} 
              className={`answerOptions ${answers === option && "selectAnswer"}`}
            >{option}</div>
          )
        })
      }
      <button disabled={BtnDisabled} className="btnSubmit" onClick={()=>{setIndexLevel(indexLevel + 1)}}>Suivant</button>
    </div>
  )
}

export default Quizz