'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    username: DataTypes.STRING(50),
    email: DataTypes.STRING(30),
    password: DataTypes.STRING(100),
    role: DataTypes.ENUM('admin', 'mahasiswa', 'fakultas', 'program_studi')
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};