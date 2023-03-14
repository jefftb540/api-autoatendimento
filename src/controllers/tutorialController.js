import Category from '../models/Category';
import Step from '../models/Step';
import Tutorial from '../models/Tutorial';

class TutorialController {
  async create(req, res) {
    try {
      console.log(req.body);
      const newTutorial = await Tutorial.create(req.body);
      // TODO fix this const { name } = newTutorial;
      return res.json(newTutorial);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID não informado'] });
      const tutorial = await Tutorial.findByPk(id, {
        attributes: ['id', 'name'],
        include: [{
          model: Category,
          attributes: ['name'],
        }, {
          model: Step,
          attributes: ['step'],
        }],
      });
      if (!tutorial) return res.status(400).json({ errors: ['Tutorial não existe'] });

      return res.json(tutorial);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const tutorials = await Tutorial.findAll({
        attributes: ['id', 'name'],
        include: [{
          model: Category,
          attributes: ['name'],
        }, {
          model: Step,
          attributes: ['step'],
        }],
      });
      if (!tutorials) return res.status(400).json({ errors: ['Não existem tutoriais'] });
      return res.json(tutorials);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID do tutorial não informado'] });
      const tutorial = await Tutorial.findByPk(id);
      if (!tutorial) return res.status(400).json({ errors: ['Tutorial não existe'] });
      const updatedTutorial = await tutorial.update(req.body);
      return res.json(updatedTutorial);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID da tutorial não informado'] });
      const tutorial = await Tutorial.findByPk(id);
      if (!tutorial) return res.status(400).json({ errors: ['tutorial não existe'] });
      tutorial.destroy();
      res.json({ status: `Tutorial "${tutorial.name}" deletado` });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new TutorialController();
