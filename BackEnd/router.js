const { Router } = require("express");
const router = Router();
const matchController = require("./Controllers/match_controller");
const userController = require("./Controllers/user_controller");

router.get("/matches", matchController.getAllMatches);
router.post("/match", matchController.addMatch);
router.delete("/match/:_id", matchController.deleteMatch);
router.get("/user/:name", userController.getUser);
router.post("/user", userController.addUser);

module.exports = router;
