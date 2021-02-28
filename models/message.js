const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db.js");

const Message = sequelize.define('Message', {
  // Model attributes are defined here
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  userID: {
      type: DataTypes.STRING,
      allowNull: false
  },
  message: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});
Message.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Message === sequelize.models.Message); //true

module.exports = Message;
