module.exports = (sequelize, DataTypes) => {
  const FasesPadroes = sequelize.define('FasesPadroes', {
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  FasesPadroes.associate = (models) => {
    FasesPadroes.belongsTo(models.GrupoFasesPadroes, {
      foreignKey: 'grupofasespadroesId',
      onDelete: 'CASCADE',
    }),
    FasesPadroes.belongsTo(models.Fases, {
      foreignKey: 'fasesId',
      onDelete: 'CASCADE',
    });
  };

  return FasesPadroes;
};