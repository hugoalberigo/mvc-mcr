const express = require('express')
const router = express.Router()
const match = require("../controllers/matchController")
const restrict = require("../middlewares/restrictApi")

router.post("/api/v1/:room_id", restrict, match.fight)

module.exports = router