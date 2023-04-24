const User = require("../models/userSchema");

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

module.exports = { addUser, getUser };
