const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../index.js");

const Rider = sequelize.define('Rider', {
  // Model attributes are defined here
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  latitude: {
    type: DataTypes.STRING
  },
  longitude: {
    type: DataTypes.STRING
  },
  userID: {
      type: DataTypes.STRING,
      allowNull: false
  },
  hasManyRides: {
    type: DataTypes.STRING
  },
  hasDrivenManyRiders: {
      type: DataTypes.STRING
  }
}, {
  // Other model options go here
});
Rider.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Rider === sequelize.models.Rider); //true

module.exports = Rider;
