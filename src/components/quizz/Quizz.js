import React, { useEffect, useState, useContext } from 'react'
import Level from "../isConnect/level/Level";
import ProgressBar from "../isConnect/progressBar/ProgressBar";
import QuizzMarvel from "../../quizzMarvel/quizzMarvel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizzOver from '../isConnect/quizzover/QuizzOver';
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

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
  const [endQuizz, setEndQuizz] = useState(false);
  const [levelQuizz, setLevelQuizz] = useState(0);

  const lodalLevelName = level => QuizzMarvel[0].quizz[level]

  const iconContext = useContext(IconContext)
  console.log(iconContext);
 
  useEffect(()=> {
    const fetchedArrayQuizz = lodalLevelName(levelNames[levelQuizz])
    setStoredQuestions(fetchedArrayQuizz)
    
  },[levelQuizz])

  const handleMouse = (e) => {
    setAnswers(e.target.innerText);
    setBtnDisabled(false)
    e.target.classList.add('selectAnswer')
    
  }


  const handleSubmitAnswer = (e) => {    
    if(answers === storedQuestion[indexLevel].answer){
      setScore(score + 1);
      setBtnDisabled(true)
      toast.success("Bonne réponse +1",{
        theme: "colored",
      })
    }else{
      toast.error("Mauvaise réponse",{
        theme: "colored",
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    }
    
    setIndexLevel(indexLevel + 1);

    if(indexLevel + 1 === 10){
      console.log("over quizz");
      setEndQuizz(true);
    }
  }

  useEffect(() => {
    toast.warn("Bienvenue",{
      theme: "colored",
      icon: false
    })
  },[]);

  const loadLevels = () => {
    setLevelQuizz(levelQuizz + 1);
    setStoredQuestions(lodalLevelName(levelNames[levelQuizz + 1]))
    setEndQuizz(false);
    setIndexLevel(0)

    console.log(storedQuestion)
  }


  return (
    <>
      {
        !endQuizz ?
          <>
            <ToastContainer
              autoClose={1000}
            />
            <Level 
              levels={levelNames} 
              levelQuizz={levelQuizz}  
            />
            <button onClick={()=>loadLevels()}>Next</button>
            <ProgressBar 
              question={indexLevel + 1} 
              percent={(indexLevel * 100) / 10} 
            />
            <h2>{storedQuestion[indexLevel]?.question}</h2>
            <div className="failureMsg">{errMessage}</div>
            {
              storedQuestion[indexLevel]?.options.map((option, index) => {
                return(
                  <div 
                    key={index}
                    onClick={handleMouse} 
                    className={`answerOptions ${answers === option && "selectAnswer"}`}
                  >
                    <FaChevronRight />
                    {option}
                  </div>
                )
              })
            }
            <button disabled={BtnDisabled} className="btnSubmit" onClick={handleSubmitAnswer}>Suivant</button>
            </>
          :
            <QuizzOver 
              allQuestions={storedQuestion} 
              score={score} 
              nextLevels={()=>loadLevels()}
            />
      }
    </>
  )
}

export default Quizz