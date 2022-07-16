import React from 'react';


export default function Answers() {
  const answer = {
    type: 'checkbox',
    values: ["computer Style Sheet", "Cascade Style Sheet" , "Creative Style Sheet"]
  }

  const checkAnswer = () => {

  }
 
  return (
    <div id="answers">
      <ul>
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