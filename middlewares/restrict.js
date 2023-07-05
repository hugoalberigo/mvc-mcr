//Rescrict harus authenticated dan punya role admin

module.exports = (req, res, next) => { 
    if (req.isAuthenticated() && (req.user.role === "admin"))  return next()

    res.redirect("/auth/login")
}