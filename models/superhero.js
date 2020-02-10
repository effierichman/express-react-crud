'use strict';
module.exports = (sequelize, DataTypes) => {
  const SuperHero = sequelize.define('SuperHero', {
    hero: DataTypes.STRING,
    side_kick: DataTypes.STRING
  }, {});
  SuperHero.associate = function(models) {
    // associations can be defined here
  };
  return SuperHero;
};