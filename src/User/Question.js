import React from 'react';
import Answers from './Answers';
import quiz from './././data/quiz';

export default function Question() {
  const questionArr = quiz;
  const [current, setCurrent] = useState(0);
  const [question, setQuestion] = useState(questionArr[current]);
  const nextQuestion = () => {
    if(current < questionArr.length) {
      setCurrent(current + 1);
      setQuestion(questionArr[current]);
    }
  }

  return (
    <>
    <div className="question-wrapper">
      <h2>{question.question}</h2>
    </div>
    <div className="answers-wrapper">
      <Answers value={question.answers}/>
    </div>
    <div className="submit-wrapper">
       <input type="button" value= "Submit" onClick={nextQuestion}/>
    </div>
    </>
  )
}