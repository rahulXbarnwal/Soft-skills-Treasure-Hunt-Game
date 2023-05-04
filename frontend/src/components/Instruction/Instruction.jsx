import "./Instruction.css"; //import css file for styling

import Api from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Instruction = () => {
  const navigate = useNavigate();
  const fetchQuesAndProceed = async () => {
    try {
      const res = await axios.get(Api.getAllQues, {
        headers: {
          token: `Bearer ${localStorage.token}`,
        },
      });
      if (res) {
        localStorage.setItem("questions", JSON.stringify(res.data));
        localStorage.setItem("totalScore", 0);
        for (let i = 1; i <= 12; i++) {
          localStorage.setItem(`point${i}`, 0);
        }
        localStorage.setItem("currentURL", "/Puzzle1");
        navigate("/Puzzle1");
      }
    } catch (err) {
      toast.error(`${err.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <div className="instruction-container">
      <h1>Welcome to the Soft Skills Puzzle!</h1>
      <h2>Instructions -</h2>
      <br />
      <ul>
        <li>
          This quiz will test your <b>Soft-Skills</b> on the basis of your given
          answer for a particular question.
        </li>
        <li>
          If you choose the correct answer, you will get points. Each question
          will have atleast <b>5 hints</b> which will help you find hidden
          clues.
        </li>
        <li>
          Remember these hints can be a dead end so be careful while using them.
          You can use internet to search about those clues.
        </li>
        <li>
          You can't comeback to previous question once you have chosen it, so
          choose carefully.
        </li>
        <li>
          At last, based upon your accuracy the soft-skills accuracy will be
          determined.
        </li>
        <li>
          Time for each question will be <b>5 minutes</b>.
        </li>
      </ul>
      <button className="proceed-button" onClick={fetchQuesAndProceed}>
        Proceed to Quiz
      </button>
    </div>
  );
};

export default Instruction;
