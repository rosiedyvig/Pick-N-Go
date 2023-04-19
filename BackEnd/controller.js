const Match = require("./models/eventSchema");

const getAllMatches = async (req, res) => {
  try {
    const data = await Match.find();
    res.send(data);
    res.status(200);
  } catch (e) {
    res.status(500);
    res.send(e.messages);
  }
};

const addMatch = async (req, res) => {
  const match = req.body;
  try {
    if (match.name === "" || match.kick_off === "" || match.location == "") {
      res.status(400);
      res.json("Error: some of the inputs were not provided correctly");
    } else {
      await Match.create({
        name: match.name,
        leauge: match.leauge,
        date: match.date,
        kick_off: match.kick_off,
        meet_up: match.meet_up,
        location: match.location,
        looking_for: match.looking_for,
        comments: match.comments,
      });
      res.status(201);
      res.json(match);
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
};

module.exports = { getAllMatches, addMatch };
