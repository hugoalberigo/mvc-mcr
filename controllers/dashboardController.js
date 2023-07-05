const {users, user_game_history} = require("../models")
const passport = require("../lib/passport")

exports.index = (req, res) => {
    const title = "Dashboard User Game"
    const subTitle = "Welcome Admin to dashboard user game"
    const userData = req.user.dataValues

    user_game_history.findAll()
    .then(user_game_history => {
        res.render("web/dashboard", {title, subTitle, userData, user_game_history, users})
    })
}

exports.about = (req, res) => {
    const title = "About Me"
    const subTitle = "Here is about me"
    
    res. render("web/about", {title, subTitle})
}