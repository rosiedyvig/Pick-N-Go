const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/matches", controller.getAllMatches);
router.post("/match", controller.addMatch);

module.exports = router;
