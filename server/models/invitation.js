'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invitation.init({
    name: DataTypes.STRING,
    konfirmasi: DataTypes.STRING,
    jumlah: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate(instance, option) {
        if(instance.konfirmasi === "tidak hadir" || instance.konfirmasi === "ragu" ){
          instance.jumlah = 0
        }
      }
    },
    sequelize,
    modelName: 'Invitation',
  });
  return Invitation;
};