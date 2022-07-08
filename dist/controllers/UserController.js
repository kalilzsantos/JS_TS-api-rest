"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async create(req, res) {
    try {
      const user = await _User2.default.create(req.body);
      const { id, nome, email } = user;
      return res.json({
        id, nome, email,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const userExists = await _User2.default.findByPk(req.userId);
      if (!userExists) {
        return res.status(400).json({
          errors: ['Missing User'],
        });
      }

      const user = await userExists.update(req.body);
      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const userExists = await _User2.default.findByPk(req.userId);
      const { email } = userExists;
      if (!userExists) {
        return res.status(400).json({
          errors: ['Missing User'],
        });
      }

      await userExists.destroy();
      return res.json({
        message: [email, 'Usuario deletado'],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController(); // dessa forma minha classe já está instanciada
