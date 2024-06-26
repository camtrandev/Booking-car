'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Allcode.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' })
      Allcode.hasMany(models.User, { foreignKey: 'gender', as: 'genderData' })

      Allcode.hasMany(models.TripInfor, { foreignKey: 'priceId', as: 'priceTypeData' })
      Allcode.hasMany(models.TripInfor, { foreignKey: 'locationStartId', as: 'locationStartTypeData' })
      Allcode.hasMany(models.TripInfor, { foreignKey: 'paymentId', as: 'paymentTypeData' })
      Allcode.hasMany(models.TripInfor, { foreignKey: 'locationEndId', as: 'locationEndTypeData' })

      Allcode.hasMany(models.Car_rental, { foreignKey: 'locationId', as: 'locationTypeData' })
      Allcode.hasMany(models.Car_infors, { foreignKey: 'locationId', as: 'location' })
      Allcode.hasMany(models.Car_infors, { foreignKey: 'priceId', as: 'priceData' })

    }
  };
  Allcode.init({
    keyMap: DataTypes.STRING,
    type: DataTypes.STRING,
    valueEn: DataTypes.STRING,
    valueVi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allcode',
  });
  return Allcode;
};