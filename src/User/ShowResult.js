import React , { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function TimeOut(route, props) {
    
  let { score } = route.params;
  let navigate = useNavigate();
  const startQuiz = () => {
    navigate('/');
  }

    return (
        <>
            <h1 className='timeout-msg '>Your Score!!!</h1>
            <h2 className='timeout-msg '>{score}</h2>
            <div className="submit-wrapper" onClick={startQuiz}>Restart
      </div>
        </>
    )

}