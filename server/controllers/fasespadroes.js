const FasesPadroes = require('../models').FasesPadroes;

module.exports = {
  adicionar(req, res) {
    return FasesPadroes
      .create({
        descricao: req.body.descricao,
        grupofasespadroesId: req.params.grupofasespadroesId,
        fasesId: req.params.fasesId,
      })
      .then(fasespadroes => res.status(201).send(fasespadroes))
      .catch(error => res.status(400).send(error));
  },
  atualizar(req, res) {
    return FasesPadroes
      .find({
          where: {
            id: req.params.fasespadroesId,
            grupofasespadroesId: req.params.grupofasespadroesId,
          },
        })
      .then(fasespadroes => {
        if (!fasespadroes) {
          return res.status(404).send({
            message: 'Fase padrão não encontrada',
          });
        }  
        return fasespadroes
          .update({
            descricao: req.body.descricao || fasespadroes.descricao
          })
          .then(updatedfasespadroes => res.status(200).send(updatedfasespadroes))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  excluir(req, res) {
    return FasesPadroes
      .findById(req.params.fasespadroesId)
      .then(FasesPadroes => {
        if (!FasesPadroes) {
          return res.status(400).send({
            message: 'Fases Padrão não foi encontrado para exclusão',
          });
        }
        return FasesPadroes
          .destroy()
          .then(() => res.status(200).send({
            message: 'Fases Padrão excluído com sucesso',
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },   
  listar(req, res) {
    return FasesPadroes
      .findAll({
        where: {
          grupofasespadroesId: req.params.grupofasespadroesId,
        },
      })
      .then(FasesPadroes => res.status(200).send(FasesPadroes))
      .catch(error => res.status(400).send(error));
  }, 
};