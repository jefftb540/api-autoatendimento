import Sequelize, { Model } from 'sequelize';

export default class Tutorial extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id' });
    this.hasMany(models.Step, { foreignKey: 'tutorial_id' });
  }
}
