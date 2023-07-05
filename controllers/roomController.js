const {rooms, fight} = require("../models")

exports.create = (req, res) => {
    var name = Date.now();
    name = String(name);

    rooms.create({
        name: name
    })
    .then(rooms => {
        res.status(200).json(rooms)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}