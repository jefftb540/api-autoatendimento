import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Category from '../models/Category';
import Step from '../models/Step';
import Tutorial from '../models/Tutorial';
import User from '../models/User';

const models = [User, Category, Tutorial, Step];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => {
  model.init(connection);
});

// eslint-disable-next-line no-unused-expressions
models.forEach((model) => { model.associate && model.associate(connection.models); });
