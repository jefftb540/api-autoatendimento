import Category from '../models/Category';
import Tutorial from '../models/Tutorial';

class CategoryController {
  async create(req, res) {
    try {
      const newCategory = await Category.create(req.body);
      const { name } = newCategory;
      return res.json({ name });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID da categoria não informado'] });
      const category = await Category.findByPk(id, {
        attributes: ['id', 'name'],
        include: [{
          model: Tutorial,
          attributes: ['id', 'name'],
        }],
      });
      if (!category) return res.status(400).json({ errors: ['Categoria não existe'] });
      const { name, Tutorials } = category;
      console.log(category);

      return res.json({ id, name, Tutorials });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const categories = await Category.findAll({ attributes: ['id', 'name'] });
      return res.json(categories);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID da categoria não informado'] });
      const tutorial = await Category.findByPk(id);
      if (!tutorial) return res.status(400).json({ errors: ['Categoria não existe'] });
      const updatedCategory = await tutorial.update(req.body);
      const { name } = updatedCategory;
      return res.json({ id, name });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID da categoria não informado'] });
      const category = await Category.findByPk(id);
      if (!category) return res.status(400).json({ errors: ['Categoria não existe'] });
      category.destroy();
      res.json({ status: `Categoria "${category.name}" deletada` });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new CategoryController();
