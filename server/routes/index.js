const grupofasespadroesController = require('../controllers').grupofasespadroes;
const fasespadroesController = require('../controllers').fasespadroes;
const fasesController = require('../controllers').fases;

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Bem vindo a API Zeta DB!',
  }));

  app.post('/api/grupofasespadroes', grupofasespadroesController.adicionar);
  app.get('/api/grupofasespadroes', grupofasespadroesController.listar);
  app.get('/api/grupofasespadroes/finddescricao/:grupofasespadroesdescricao', grupofasespadroesController.recuperarListaPorDescricao);
  app.get('/api/grupofasespadroes/:grupofasespadroesId', grupofasespadroesController.recuperarPorId);
  app.put('/api/grupofasespadroes/:grupofasespadroesId', grupofasespadroesController.atualizar);
  app.delete('/api/grupofasespadroes/:grupofasespadroesId', grupofasespadroesController.excluir);

  app.post('/api/fasespadroes', fasespadroesController.adicionar);
  app.get('/api/fasespadroes/:fasepadraoId', fasespadroesController.recuperarPorId);
  app.get('/api/fasespadroes/grupofasespadroes/:grupoFasesId', fasespadroesController.listar);
  app.put('/api/fasespadroes/:fasepadraoId', fasespadroesController.atualizar);
  app.delete('/api/fasespadroes/:fasepadraoId', fasespadroesController.excluir  
  );


  app.post('/api/fases', fasesController.adicionar);
  app.get('/api/fases', fasesController.listar);
  app.get('/api/fases/findnome/:fasesnome', fasesController.recuperarListaPorNome);
  app.get('/api/fases/:faseId', fasesController.recuperarPorId);
  app.put('/api/fases/:faseId', fasesController.atualizar);
  app.delete('/api/fases/:faseId', fasesController.excluir);

  app.delete('/api/fasespadroes/:fasespadroesId', fasespadroesController.excluir);

};