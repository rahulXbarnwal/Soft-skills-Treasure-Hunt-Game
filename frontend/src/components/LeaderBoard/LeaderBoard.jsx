import "./LeaderBoard.css";

import React, { useContext, useEffect, useState } from "react";

import Api from "../../Api";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LeaderBoard = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(Api.getAllScores, {
          headers: {
            token: `Bearer ${localStorage.token}`,
          },
        });
        setLeaderBoardData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="leaderboard-container">
      <h2>LeaderBoard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total Score</th>
            <th>Soft Skills</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoardData.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.score}/100</td>
              <td>
                {item.softSkills.map((skill) => (
                  <p key={skill.name}>
                    {skill.name}: {skill.percentage}%
                  </p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default LeaderBoard;