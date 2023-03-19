/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('categories', [{
      name: 'Categoria teste',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});

    await queryInterface.bulkInsert('tutorials', [{
      name: 'Tutorial teste',
      category_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

};
