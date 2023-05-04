const LeaderBoard = require("../models/leaderboard");

exports.addScore = async (req, res) => {
  const email = req.body.email;

  try {
    const savedScore = await LeaderBoard.updateOne({ email }, req.body, {
      upsert: true,
    });
    res.status(201).json(savedScore);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllScores = async (req, res) => {
  try {
    const scores = await LeaderBoard.find().sort({ score: -1 });
    res.status(200).json(scores);
  } catch (err) {
    res.status(500).json(err);
  }
};
