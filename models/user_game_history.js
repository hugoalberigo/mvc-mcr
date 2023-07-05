'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async score_record(user_id, username) {
      var user = await this.findOne({
        where: {user_id: user_id}
      })

      if (user == null) {
        await this.create({user_id: user_id, username: username, score: 1})
        .then(user => {
          return user
        })
      } else {
        var score = user.score + 1
        await this.update({
          score: score
        }, {where: {user_id: user_id}})
        .then(user => {
          return user
        })
      }
    }
  }
  user_game_history.init({
    user_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game_history',
  });
  return user_game_history;
};