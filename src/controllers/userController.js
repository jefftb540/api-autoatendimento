import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { name, ifrn_id, email } = newUser;
      return res.json({ name, ifrn_id, email });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID do usuário não informado'] });
      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });
      const { name, ifrn_id, email } = user;
      return res.json({
        id, name, ifrn_id, email,
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email', 'ifrn_id'] });
      return res.json(users);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID do usuário não informado'] });
      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });
      const newUser = await user.update(req.body);
      const { name, ifrn_id, email } = newUser;
      return res.json({
        id, name, ifrn_id, email,
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID do usuário não informado'] });
      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });
      user.destroy();
      res.json({ status: `usuário ${user.name} deletado` });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
