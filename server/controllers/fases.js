const Fases = require('../models').Fases;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  adicionar(req, res) {
    return Fases
      .create({
        nome: req.body.nome,
        prioridade: req.body.prioridade
      })
      .then(Fases => res.status(201).send(Fases))
      .catch(error => res.status(400).send(error));
  },
  listar(req, res) {
    return Fases
      .findAll()
      .then(Fases => res.status(200).send(Fases))
      .catch(error => res.status(400).send(error));
  },
  recuperarPorId(req, res) {
    return Fases
      .findById(req.params.faseId)
      .then(Fases => {
        if (!Fases) {
          return res.status(404).send({
            message: 'Fase não encontrada.',
          });
        }
        return res.status(200).send(Fases);
      })
      .catch(error => res.status(400).send(error));
  },     
  atualizar(req, res) {
    return Fases
      .find({
          where: {
            id: req.params.faseId
          },
        })
      .then(Fases => {
        if (!Fases) {
          return res.status(404).send({
            message: 'Fase não encontrada',
          });
        }  
        return Fases
          .update({
            nome: req.body.nome || Fases.nome,
            prioridade: req.body.prioridade || Fases.prioridade
          })
          .then(Fases => res.status(200).send(Fases))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  excluir(req, res) {
    return Fases
      .find({
          where: {
            id: req.params.faseId
          },
        })
      .then(Fases => {
        if (!Fases) {
          return res.status(404).send({
            message: 'Fase não encontrada',
          });
        }  
        return Fases
          .destroy()
          .then(() => res.status(200).send({message: 'Fase excluída com sucesso'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },  
  recuperarListaPorNome(req, res) {
    return Fases
      .findAll({
        where: {
          nome: {
            [Op.iLike]: '%' + req.params.fasesnome + '%' 
          }
        }          
      })
      .then(Fases => res.status(200).send(Fases))
      .catch(error => res.status(400).send(error));
  }, 
};