"use strict";const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        nome: 'Kalil Santos',
        email: 'kalil.santos@gmail.com',
        password_hash: await bcrypt.hash('kalil1234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe',
        email: 'john.doe@gmail.com',
        password_hash: await bcrypt.hash('12341234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Lucas Doe',
        email: 'lucas.doe@gmail.com',
        password_hash: await bcrypt.hash('12341234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Fernanda Doe',
        email: 'fernanda.doe@gmail.com',
        password_hash: await bcrypt.hash('12341234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  async down() {},
};
