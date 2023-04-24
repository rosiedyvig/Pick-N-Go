const mongoose = require("./index");

const Schema = mongoose.Schema;

const matchSchema = new Schema(
  {
    name: { type: String, required: true },
    leauge: { type: String, required: true },
    date: { type: String, required: true },
    kick_off: { type: String, required: true },
    meet_up: { type: String, required: true },
    location: { type: String, required: true },
    looking_for: { type: String, required: true },
    comments: { type: String, required: true },
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
  },
  { timestamps: true }
);

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
