const FasesPadroes = require('../models').FasesPadroes;

module.exports = {
  adicionar(req, res) {
    return FasesPadroes
      .create({
        descricao: req.body.descricao,
        grupofasespadroesId: req.body.grupofasespadroesId,
        fasesId: req.body.fasesId, 
      })
      .then(fasespadroes => res.status(201).send(fasespadroes))
      .catch(error => res.status(400).send(error));
  },
  atualizar(req, res) {
    return FasesPadroes
      .find({
          where: {
            id: req.params.fasepadraoId
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
            descricao: req.body.descricao || fasespadroes.descricao,
            fasesId: req.body.fasesId || fasespadroes.fasesId,
            grupofasespadroesId: req.body.grupofasespadroesId || fasespadroes.grupofasespadroesId
          })
          .then(updatedfasespadroes => res.status(200).send(updatedfasespadroes))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  excluir(req, res) {
    return FasesPadroes
      .findById(req.params.fasepadraoId)
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
          grupofasespadroesId: req.params.grupoFasesId,
        },
      })
      .then(FasesPadroes => res.status(200).send(FasesPadroes))
      .catch(error => res.status(400).send(error));
  }, 
  recuperarPorId(req, res) {
    return FasesPadroes
      .findById(req.params.fasepadraoId)
      .then(FasesPadroes => {
        if (!FasesPadroes) {
          return res.status(404).send({
            message: 'Fases Padrão não encontrado.',
          });
        }
        return res.status(200).send(FasesPadroes);
      })
      .catch(error => res.status(400).send(error));
  },
};