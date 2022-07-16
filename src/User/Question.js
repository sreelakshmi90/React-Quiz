import React from 'react';
import Answers from './Answers';

export default function Question() {
  const question = 'What does CSS stand for?'
  return (
    <>
    <div className="question-wrapper">
      <h2>{question}</h2>
    </div>
    <div className="answers-wrapper">
      <Answers/>
    </div>
    <div className="submit-wrapper">
       <input type="button" value= "Submit"/>
    </div>
    </>
  )
}