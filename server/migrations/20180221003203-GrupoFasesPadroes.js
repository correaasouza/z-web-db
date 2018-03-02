'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
       'GrupoFasesPadroes',
       'perc_comissao', Sequelize.REAL
     );   
   },
 
   down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
       'GrupoFasesPadroes',
       'perc_comissao', Sequelize.REAL
     );  
   }
 };
