/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Admin',
      password_hash: '$2a$12$gMOlSDDfRJ.kB60c3TFgWOK3VQvkTurduFBlvZSmPGL0sqDvf1nlG',
      ifrn_id: '1010',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
