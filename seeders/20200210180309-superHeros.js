'use strict';

const superHero = [
  {
    "hero": "Batman",
      "side_kick": "Robin",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    "hero": "Shrek",
      "side_kick": "Donkey",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    "hero": "Kickass",
      "side_kick": "Hit-Girl",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    "hero": "Asterix",
      "side_kick": "Obelix",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    "hero": "Snoopy",
      "side_kick": "Woodstock",
      createdAt: new Date(),
      updatedAt: new Date()
  }]


  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SuperHeros', superHero, {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('SuperHeros', null, {});
    }
  };
