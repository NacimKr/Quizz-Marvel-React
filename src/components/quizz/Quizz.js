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
  const [BtnDisabled, setBtnDisabled] = useState(true);
  const [score, setScore] = useState(0);
  const [errMessage, seteErrMessage] = useState('')

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

  const handleSubmitAnswer = (e) => {    
    if(answers === storedQuestion[indexLevel].answer){
      setIndexLevel(indexLevel + 1);
      setScore(score + 1);
      setBtnDisabled(true)
    }
  }

  return (
    <div>
      <Level  />
      <ProgressBar question={indexLevel + 1} percent={(score * 100) / 10} />
      <h2>{storedQuestion[indexLevel]?.question}</h2>
      <div className="failureMsg">{errMessage}</div>
      {
        storedQuestion[indexLevel]?.options.map((option, index) => {
          return(
            <div 
              key={index}
              onClick={handleMouse} 
              className={`answerOptions ${answers === option && "selectAnswer"}`}
            >{option}</div>
          )
        })
      }
      <button disabled={BtnDisabled} className="btnSubmit" onClick={handleSubmitAnswer}>Suivant</button>
    </div>
  )
}

export default Quizz