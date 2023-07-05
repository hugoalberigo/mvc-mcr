'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fight.init({
    room_id: DataTypes.INTEGER,
    user_id_p1: DataTypes.INTEGER,
    p1_choice: DataTypes.CHAR,
    user_id_p2: DataTypes.INTEGER,
    p2_choice: DataTypes.CHAR,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fight',
  });
  return fight;
};