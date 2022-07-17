import React , { useState, useRef } from 'react';
import Answers from './Answers';
import quiz from '../data/quiz';
import { useNavigate } from 'react-router-dom';
import Counter from './Timer';


export default function Question() {
  const questionArr = quiz;
  const [current, setCurrent] = useState(0);
  const [question, setQuestion] = useState(questionArr[current]);
  const [isAnswered, setIsAnswered] = useState(false);
  let navigate = useNavigate();
  const score = useRef(0);
  const isCorrect = useRef(false);
  
  const nextQuestion = () => {
    if(isAnswered) {
      if(current < questionArr.length -1 ) {
        if(isCorrect.current) {
          score.current = score.current++;
        }
        setCurrent(current + 1);
        // setQuestion(questionArr[current]); why this is not worked
        setIsAnswered(false);
        setQuestion(questionArr[current + 1]);
      } else {
        navigate('/finish', {score: score.current});
      }
    }
  }

  const handleIncreaseScore = (val) => {
    // why this doesnt update isAnswred to true ?
    setIsAnswered(true);
    isCorrect.current = val;
  }

  return (
    <>
    <div className="container">
      <div className="question-wrapper">
      <Counter initialMinute = "1"/>
      <h3>{current } / {questionArr.length}  Answered</h3>
        <h2>{current + 1}. {question.question}</h2>
      </div>
      <div className="answers-wrapper">
        <Answers answer={question.answers} increaseScore={handleIncreaseScore} isAnswered/>
      </div>
      <div className="submit-wrapper" onClick={nextQuestion}>
        {current !== questionArr.length -1  ? 'Submit' : 'Finish' }
      </div>
      </div>
    </>
  )
}