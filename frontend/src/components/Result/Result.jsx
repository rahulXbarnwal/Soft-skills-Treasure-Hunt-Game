import "./Result.css";

import { useContext, useEffect, useState } from "react";

import Api from "../../Api";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const totalPoints = localStorage.getItem("totalScore");
  const [softSkills, setSoftSkills] = useState([]);
  useEffect(() => {
    const skill1 = [1, 2, 3, 4, 5, 8, 9, 10, 11],
      skill2 = [2, 5, 6, 7, 8, 9, 12],
      skill3 = [4, 5, 8, 9, 11];
    let skillScore1 = 0,
      skillScore2 = 0,
      skillScore3 = 0;
    for (let i = 0; i < skill1.length; i++)
      skillScore1 += Number(localStorage.getItem(`point${skill1[i]}`));
    for (let i = 0; i < skill2.length; i++)
      skillScore2 += Number(localStorage.getItem(`point${skill2[i]}`));
    for (let i = 0; i < skill3.length; i++)
      skillScore3 += Number(localStorage.getItem(`point${skill3[i]}`));
    let arr = [
      {
        name: "Critical Thinking",
        percentage: (skillScore1 / skill1.length).toFixed(2),
      },
      {
        name: "Creativity",
        percentage: (skillScore2 / skill2.length).toFixed(2),
      },
      {
        name: "Attention to Detail",
        percentage: (skillScore3 / skill3.length).toFixed(2),
      },
    ];
    setSoftSkills(arr);
    const addData = async () => {
      try {
        const res = await axios.post(
          Api.addScore,
          {
            name: localStorage.name,
            email: localStorage.email,
            softSkills: arr,
            score: (totalPoints / 12).toFixed(2),
          },
          {
            headers: {
              token: `Bearer ${localStorage.token}`,
            },
          }
        );
        if (res) {
          console.log(res.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    addData();
  }, []);

  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const leaderBoard = () => {
    navigate("/leaderBoard");
  };

  return (
    <div className="result-container">
      <h2>Result</h2>
      <div className="accuracy">
        <h5>Soft-Skills %</h5>
      </div>
      <div className="soft-skills">
        {softSkills.map((skill) => (
          <div key={skill.name} className="skill">
            <h5>{skill.name}:</h5>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.percentage} %` }}
              >
                <p>{skill.percentage}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-points">
        <h5>Total Points:</h5>
        <p>{(totalPoints / 12).toFixed(2)}/100</p>
      </div>
      <div className="buttons">
        <button className="leaderboard-button" onClick={leaderBoard}>
          Leaderboard
        </button>
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Result;
