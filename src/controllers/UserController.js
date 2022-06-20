import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json({
        user,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const userExists = await User.findByPk(req.params.id);
      if (!userExists) {
        return res.status(400).json({
          errors: ['Missing User'],
        });
      }

      const user = await userExists.update(req.body);
      return res.json({
        user,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const userExists = await User.findByPk(req.params.id);
      if (!userExists) {
        return res.status(400).json({
          errors: ['Missing User'],
        });
      }

      await userExists.destroy();
      return res.json({
        message: ['Usuario deletado'],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController(); // dessa forma minha classe já está instanciada
