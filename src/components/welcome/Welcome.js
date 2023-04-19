import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {

  const [wolverineClaws, setWolverinClaws] = useState(true)
  const [showClaws, setShowClaws] = useState({
    right:false,
    left:false
  });
  
  const btnOverRegistration = useRef(null);
  const btnOverConnexion = useRef(null);

  useEffect(() => {
    setTimeout(() => {
        setWolverinClaws(false)
    },800);
  }, []);

  const showGriffesWoleverine = () => {
    if(showClaws.right){
        return "rightImg"
    }else if(showClaws.left){
        return "leftImg"
    }
  }

  const handleOver = (typeBtn) => {
    if(typeBtn.current.text === "Aller au Quizz" ){
        setShowClaws({...showClaws, right:false, left:true})
        console.log(showClaws)
    }else if(typeBtn.current.text === "Règles du jeu" ){
        setShowClaws({...showClaws, right:true, left:false})
        console.log(showClaws)
    }
  }

  const handleMouseOut = () => {
    setShowClaws({...showClaws, right:false, left:false})
  }
  

  return (
    <main>
        <div className={`welcomePage ${wolverineClaws && "startingImg"} ${showClaws.right && "rightImg"}  ${showClaws.left && "leftImg"}`}>
            <div className="leftBox">
                <Link 
                    ref={btnOverConnexion} 
                    onMouseOver={()=>handleOver(btnOverConnexion)}
                    onMouseOut={()=>handleMouseOut()} 
                    to="/connect" 
                    className="btn-welcome">Aller au Quizz</Link>
            </div>
            <div className="rightBox">
                <Link 
                ref={btnOverRegistration} 
                onMouseOver={()=>handleOver(btnOverRegistration)}
                onMouseOut={()=>handleMouseOut()} 
                to="/signup" 
                className="btn-welcome">Règles du jeu</Link>
            </div>
        </div>
    </main>
  )
}

export default Welcome