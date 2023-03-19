/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    //
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('users', 'email');
  },
};
