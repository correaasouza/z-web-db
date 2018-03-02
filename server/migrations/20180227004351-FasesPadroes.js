'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'FasesPadroes',
      'fasesId',
        {type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Fases',
          key: 'id',
          as: 'fasesId',
        },
      }
    );   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'FasesPadroes',
      'fasesId', Sequelize.INTEGER
    );  
  }
};
