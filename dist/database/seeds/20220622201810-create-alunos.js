"use strict";module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('alunos', [{
      nome: 'Kalil',
      sobrenome: 'Santos',
      email: 'kalilzsantos@gmail.com',
      idade: '23',
      peso: '88.8',
      altura: '1.75',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down() {},
};
