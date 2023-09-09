const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);
const Suggestion = sequelize.define("suggestion", {
   suggestionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
   },
   fullName: {
      type: DataTypes.STRING(20),
      allowNull: false
   },
   phoneNumber: {
      type:DataTypes.STRING(30)
   },
   title: {
      type: DataTypes.STRING(50),
      allowNull: false,
   },
   content: {
      type: DataTypes.TEXT,
      allowNull: false,
   },
   filePicture: {
      type: DataTypes.STRING
   }
});


const initSuggestion = () => {
   return Suggestion.sync({ alert: true });
};

module.exports = { Suggestion, initSuggestion };
