import React, { useEffect, useState } from "react";

import Api from "../../Api";
import NavBar from "../NavBar/NavBar";
import Question from "../Question/Question";
import axios from "axios";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchAllQues = async () => {
      const res = await axios.get(Api.getAllQues, {
        headers: {
          token: `Bearer ${localStorage.token}`,
        },
      });
      if (res) {
        setQuestions(res.data);
      }
    };
    fetchAllQues();
  }, []);
  return (
    <div>
      <NavBar />
      {questions.map((question) => (
        <Question
          key={question._id}
          id={question._id}
          question={question.text}
          answers={question.answers}
          hints={question.hints}
        />
      ))}
    </div>
  );
};

export default QuestionList;
