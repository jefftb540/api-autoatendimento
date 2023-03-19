import multer from 'multer';
import multerConfig from '../config/multer';
import Tutorial from '../models/Tutorial';
import Step from '../models/Step';

const upload = multer(multerConfig).single('image');
class StepController {
  async create(req, res) {
    return upload(req, res, async (error) => {
      try {
        if (error) return res.status(400).json({ error: [error] });
        if (req.file) {
          const { filename } = req.file;
          req.body.image = `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/images/${filename}`;
        }
        const newStep = await Step.create(req.body);
        return res.json(newStep);
      } catch (e) {
        console.log(e);
        res.status(400).json({ errors: e.errors.map((err) => err.message) });
      }
    });
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID não informado'] });
      const step = await Step.findByPk(id, {
        attributes: ['id', 'step', 'image'],
        include: {
          model: Tutorial,
          attributes: ['name'],
        },
      });
      if (!step) return res.status(400).json({ errors: ['Passo não existe'] });

      return res.json(step);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const steps = await Step.findAll({
        attributes: ['id', 'step', 'image'],
        include: {
          model: Tutorial,
          attributes: ['name'],
        },
      });
      if (!steps) return res.status(400).json({ errors: ['Não existem passos'] });
      return res.json(steps);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    return upload(req, res, async (error) => {
      try {
        if (error) return res.status(400).json({ error: [error] });
        if (req.file) {
          const { filename } = req.file;
          req.body.image = `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/images/${filename}`;
        }
        const step = await Step.findByPk(req.params.id);
        const updatedStep = await (await step.update(req.body)).save();
        return res.json(updatedStep);
      } catch (e) {
        console.log(e);
        res.status(400).json({ errors: e.errors.map((err) => err.message) });
      }
    });
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID da tutorial não informado'] });
      const step = await Step.findByPk(id);
      if (!step) return res.status(400).json({ errors: ['Passo não existe'] });
      step.destroy();
      res.json({ status: `Passo "${step.step}" deletado` });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new StepController();
