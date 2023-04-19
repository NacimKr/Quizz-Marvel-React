import React from 'react'
import  ProgressBar  from "../progressBar/ProgressBar"
import { Link } from 'react-router-dom'

const QuizzOver = (props) => {
    console.log(props)

    const showConditionColor = (failure, success) => {
        return props.score < 5 ? failure : success
    }

  return (
    <>
        <div className="stepsBtnContainer">
            <div className={showConditionColor("failureMsg","successMsg")}>
                {showConditionColor("revoyez vos classiques","Bravo, Vous êtes un expert")}
            </div>
            <Link 
                to={showConditionColor("/connect","/connect")} 
                className={props.score < 5 ? "failure" : "success"}
                onClick={props.nextLevels}
            >
                {showConditionColor("Retenter le Quizz","Niveau Suivant")}
            </Link>
        </div>
        <div className="percentage">
            <div className="progressPercent">Réussite: {(props.score * 100) / 10}%</div>
            <div className="progressPercent">Note: {props.score}/10</div>
        </div>
        <hr />
        <p>Les réponses aux question posées :</p>
        <div className="answerContainer">
            <table className="answers">
                <tr>
                <th>Question</th>
                <th>Réponses</th>
                <th>Infos</th>
                </tr>
                {
                    props.allQuestions?.map(question => {
                        return(
                            <tr>
                                <td>{question.question}</td>
                                <td>{question.answer}</td>
                                <td>
                                    <button className="btnInfo">Info</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    </>
  )
}

export default QuizzOver