const express = require('express')
const router = express.Router()
const dashboard = require("../controllers/dashboardController")
const restrict = require('../middlewares/restrict')

router.get("/", restrict, dashboard.index)
router.get("/about", restrict, dashboard.about)

module.exports = router