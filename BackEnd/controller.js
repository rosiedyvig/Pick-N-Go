const Match = require("./models/eventSchema");
const User = require("./models/userSchema");

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
        leauge: match.league,
        date: match.date,
        kick_off: match.kick_off,
        meet_up: match.meet_up,
        location: match.location,
        looking_for: match.looking_for,
        comments: match.comments,
        longitude: match.longitude,
        latitude: match.latitude,
      });
      res.status(201);
      res.send(match);
    }
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e.message);
  }
};

const addUser = async (req, res) => {
  const user = req.body;
  try {
    if (
      user.name === "" ||
      user.password === "" ||
      typeof user.club == Boolean
    ) {
      res.status(400);
      res.json("Error: some of the inputs were not provided correctly");
    } else {
      await User.create({
        name: user.name,
        password: user.password,
        club: user.club,
      });
      res.status(201);
      res.send(user);
    }
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e.message);
  }
};

const getUser = async (req, res) => {
  const name = req.params.name;
  try {
    const data = await User.findOne({ name: name });
    res.json(data);
    res.status(200);
    console.log("data", data);
    return data;
  } catch (e) {
    res.status(500);
    res.send(e.messages);
  }
};

module.exports = { getAllMatches, addMatch, addUser, getUser };
