'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
      'GrupoFasesPadroes',
      'sequencia', Sequelize.INTEGER
    );   
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn(
      'GrupoFasesPadroes',
      'sequencia', Sequelize.INTEGER
    );  
  }
};
