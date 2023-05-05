import "./Question.css";

import { Link } from "react-router-dom";

const Question = ({ id, question, answers, hints }) => {
  const url = `/question/${id}`;
  return (
    <div className="question-container">
      <div className="column">
        <div className="heading">Question</div>
        <div className="content">{question}</div>
      </div>
      <div className="column">
        <div className="heading">Answers</div>
        <div className="content">
          {answers.map((answer, index) => (
            <div key={index} className="hint">
              {answer}
            </div>
          ))}
        </div>
      </div>
      <div className="column">
        <div className="heading">Hints</div>
        <div className="content">
          {hints.map((hint, index) => (
            <div key={index} className="hint">
              {hint}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
