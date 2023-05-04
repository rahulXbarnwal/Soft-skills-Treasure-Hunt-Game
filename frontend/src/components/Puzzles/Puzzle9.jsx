import React, { useEffect, useState } from "react";

import Hints from "./Hints";
import { useNavigate } from "react-router-dom";

const Puzzle9 = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(
    Number(localStorage.getItem("timeLeftPuzzle9")) || 300
  ); // 5 minutes in seconds
  const [answer, setAnswer] = useState("");
  const questions = JSON.parse(localStorage.getItem("questions"));
  const correctAnswers = questions[8].answers;
  const question = questions[8].text;
  const hints = questions[8].hints;

  useEffect(() => {
    const currentUrl = localStorage.getItem("currentURL");
    if (currentUrl !== "/Puzzle9") {
      navigate(currentUrl);
    }
    let intervalId;
    if (time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      localStorage.setItem("currentURL", "/Puzzle10");
      navigate("/Puzzle10");
    }
    return () => {
      clearInterval(intervalId);
      localStorage.setItem("timeLeftPuzzle9", time.toString());
    };
  }, [time, navigate]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (correctAnswers.includes(answer.toLowerCase())) {
      const timeTaken = 300 - time;
      const puzzleScore = Math.max(Math.floor((300 - timeTaken) / 3), 0); // Max score of 100
      let currScore = Number(localStorage.getItem("totalScore"));
      let currTime = Number(localStorage.getItem("timeTaken"));
      currScore += puzzleScore;
      currTime += timeTaken;
      localStorage.setItem("totalScore", currScore);
      localStorage.setItem("timeTaken", currTime);
      localStorage.setItem("point9", puzzleScore);
      setAnswer("");
    }
    localStorage.setItem("currentURL", "/Puzzle10");
    navigate("/Puzzle10");
  };

  return (
    <div className="puzzle-container">
      <div className="timer">
        <h2 className="question">Puzzle 9</h2>
        <div>
          Timer: &nbsp;
          <span id="timer">
            {Math.floor(time / 60)}:
            {time % 60 < 10 ? "0" + (time % 60) : time % 60}
          </span>
        </div>
      </div>
      <h4>{question}</h4>
      <form className="answer-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            className="answer-input"
            onChange={handleInputChange}
            placeholder="Enter your Answer here"
          />
        </label>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <Hints
        hint1={hints[0]}
        hint2={hints[1]}
        hint3={hints[2]}
        hint4={hints[3]}
        hint5={hints[4]}
      />
    </div>
  );
};

export default Puzzle9;
