module.exports = (sequelize, DataTypes) => {
  const GrupoFasesPadroes = sequelize.define('GrupoFasesPadroes', {
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sequencia: {
      type: DataTypes.INTEGER,
    },
    perc_comissao: {
      type: DataTypes.REAL,
    }
  });

  GrupoFasesPadroes.associate = (models) => {
    GrupoFasesPadroes.hasMany(models.FasesPadroes, {
      foreignKey: 'grupofasespadroesId',
      as: 'fasesPadroes',
    });
  };

  return GrupoFasesPadroes;
};