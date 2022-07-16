import React, { useState } from 'react';


export default function Answers(props) {
  const [isAnswered,setIsAnswered] = useState(false);
  const answer = {
    type: 'checkbox',
    values: ["computer Style Sheet", "Cascade Style Sheet" , "Creative Style Sheet"],
    answer: 2
  }

  const checkAnswer = () => {
      isAnswered = true;
      if(!isAnswered) {

        setIsAnswered(true);
      }
  }
 
  return (
    <div id="answers">
      <ul className="answer-list">
        { 
          answer.values.map((value,index) => (
            <li onClick={checkAnswer}
              className="option"
              data-id={index}>
             <p> 
               <span>{(index+10).toString(36).toUpperCase()}</span>
               {value}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}