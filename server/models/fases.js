'use strict';
module.exports = (sequelize, DataTypes) => {
  var Fases = sequelize.define('Fases', {
    nome: DataTypes.STRING,
    prioridade: DataTypes.INTEGER
  }, {});
  Fases.associate = function(models) {
    // associations can be defined here
  };
  return Fases;
};