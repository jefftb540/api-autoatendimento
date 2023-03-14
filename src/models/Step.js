import Sequelize, { Model } from 'sequelize';

export default class Step extends Model {
  static init(sequelize) {
    super.init({
      step: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O passo precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      image: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Tutorial, { foreignKey: 'tutorial_id' });
  }
}
