const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db.js");

const User = sequelize.define('User', {
  // Model attributes are defined here
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   allowNull: false
  // },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
User.sync({ force: true })
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); //true

module.exports = User;

//we will need to use this file for all the uber 