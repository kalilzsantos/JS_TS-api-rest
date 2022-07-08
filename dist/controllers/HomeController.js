"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController {
  async index(req, res) {
    const aluno = await _Aluno2.default.create({
      nome: 'Kalil',
      sobrenome: 'Santos',
      email: 'kalilzsantos@gmail.com',
      idade: 23,
      peso: 88.8,
      altura: 1.75,
    });
    res.json({
      aluno,
    });
  }
}

exports. default = new HomeController(); // dessa forma minha classe já está instanciada
