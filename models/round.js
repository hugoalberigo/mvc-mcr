'use strict';
const {
  Sequelize,
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async get_active_round(room_id) {
      let round_number;
      console.log(room_id)
      var data = await this.findOne({
        where: {room_id: room_id},
        order: [['round', 'DESC']]
      }).then(data => {
        if (data) {
          round_number = data.round + 1
        } else {
          round_number = 1
        }
      })
      return round_number
    }

    static async record_winner(room_id, round, winner_id){
      var winner = await this.create({room_id: room_id, round: round, winner_id: winner_id})
      .then(match => {
        return match
      })
      .catch(err => {
        return err
      })
    }

    static async get_round_data(room_id) {
      var result = await round.findAll({
        attributes: [Sequelize.fn('count', Sequelize.col('winner_id')), Sequelize.col('winner_id')],
        where: {room_id: room_id},
        group: ["winner_id"],
        raw: true,
        order: [[Sequelize.fn('count', Sequelize.col('winner_id')), 'DESC']],
        limit: 1
      })
      return result[0]["winner_id"]
    }
  }
  round.init({
    room_id: DataTypes.INTEGER,
    round: DataTypes.INTEGER,
    winner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'round',
  });
  return round;
};