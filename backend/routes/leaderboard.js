const {
  addScore,
  getAllScores,
} = require("../controllers/leaderBoardController");
const { verifyToken } = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, addScore);

router.get("/", verifyToken, getAllScores);

module.exports = router;
