import React, { useState, useEffect } from 'react';

export default function Answers(props) {
  const { answer, increaseScore, isAnswered } = props;
  const [ selectedIndex, setSelectedIndex ] = useState(null);
 
  const checkAnswer = (index) => {
    setSelectedIndex(index);
    increaseScore(answer.correct === index +1);
  }

  //how to clear selected index on each time calling ?
  
 
  return (
      <ul className="answer-list">
        { 
          answer.values.map((value,index) => (
            <li onClick={()=> checkAnswer(index)}
              className= {"option" + (selectedIndex === index ? " answer-selected " : " ")}
              key={index}>
                <div className='option-alpha'>{(index+10).toString(36).toUpperCase()}.</div>
                <p> {value}</p>
            </li>
          ))
        }
      </ul>
  );
}