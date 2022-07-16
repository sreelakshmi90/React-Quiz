import React from 'react';


export default function Question() {
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
              <span>{(index+10).toString(36)}</span>
             <p>{value}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}