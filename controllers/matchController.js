const matchService = require("../services/matchService");

exports.createMatch = async (req, res) => {
  try {
    const { team_1, team_2, date, venue } = req.body;
    const result = await matchService.createMatch(team_1, team_2, date, venue);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMatches = async (req, res) => {
  try {
    const matches = await matchService.getMatches();
    res.status(200).json({ matches });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMatchDetails = async (req, res) => {
  try {
    const matchId = req.params.matchId;
    const matchDetails = await matchService.getMatchDetails(matchId);
    res.status(200).json(matchDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
