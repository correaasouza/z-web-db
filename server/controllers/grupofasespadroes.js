const GrupoFasesPadroes = require('../models').GrupoFasesPadroes;
const FasesPadroes = require('../models').FasesPadroes;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

module.exports = {  
  adicionar(req, res) {
    return GrupoFasesPadroes
      .create({
        descricao: req.body.descricao,
        sequencia: req.body.sequencia,
        perc_comissao: req.body.perc_comissao
      })
      .then(Grupofasespadroes => res.status(201).send(Grupofasespadroes))
      .catch(error => res.status(400).send(error));
  },
  listar(req, res) {
    return GrupoFasesPadroes
      // .findAll({
      //   include: [{
      //     model: FasesPadroes,
      //     as: 'fasesPadroes',
      //   }],
      // })
      .findAll()
      .then(Grupofasespadroes => res.status(200).send(Grupofasespadroes))
      .catch(error => res.status(400).send(error));
  },  
  recuperarPorId(req, res) {
    return GrupoFasesPadroes
      .findById(req.params.grupofasespadroesId, {
        include: [{
          model: FasesPadroes,
          as: 'fasesPadroes',
        }],
      })
      .then(Grupofasespadroes => {
        if (!Grupofasespadroes) {
          return res.status(404).send({
            message: 'Grupo de Fases Padrão não encontrado.',
          });
        }
        return res.status(200).send(Grupofasespadroes);
      })
      .catch(error => res.status(400).send(error));
  }, 
  atualizar(req, res) {
    return GrupoFasesPadroes
      .findById(req.params.grupofasespadroesId, {
        include: [{
          model: FasesPadroes,
          as: 'fasesPadroes',
        }],
      })
      .then(GrupoFasesPadroes => {
        if (!GrupoFasesPadroes) {
          return res.status(404).send({
            message: 'Grupo de Fases Padrão não foi encontrado para atualização',
          });
        }
        return GrupoFasesPadroes
          .update({
            descricao: req.body.descricao || GrupoFasesPadroes.descricao,
            sequencia: req.body.sequencia || GrupoFasesPadroes.sequencia,
            perc_comissao: req.body.perc_comissao || Grupofasespadroes.perc_comissao            
          })
          .then(() => res.status(200).send(Grupofasespadroes))  // Send back the updated GrupoFasesPadroes.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }, 
  excluir(req, res) {
    return GrupoFasesPadroes
      .findById(req.params.grupofasespadroesId)
      .then(Grupofasespadroes => {
        if (!Grupofasespadroes) {
          return res.status(400).send({
            message: 'Grupo de Fases Padrão não foi encontrado para atualização',
          });
        }
        return Grupofasespadroes
          .destroy()
          .then(() => res.status(200).send({
            message: 'Grupo de Fases Padrão excluído com sucesso',
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }, 
  recuperarListaPorDescricao(req, res) {
    return GrupoFasesPadroes
      .findAll({
        include: [{
          model: FasesPadroes,  
          as: 'fasesPadroes',
        }],
        where: {
          descricao: {
            [Op.iLike]: '%' + req.params.grupofasespadroesdescricao + '%' 
          }
        }          
      })
      .then(Grupofasespadroes => res.status(200).send(Grupofasespadroes))
      .catch(error => res.status(400).send(error));
  },   
  
};