const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/matches", controller.getAllMatches);
router.post("/match", controller.addMatch);
router.post("/user", controller.addUser);

module.exports = router;
