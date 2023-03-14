import { Router } from 'express';
import CategoryController from '../controllers/categoryController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, CategoryController.create);
router.put('/:id', loginRequired, CategoryController.update);
router.get('/:id', CategoryController.show);
router.delete('/:id', loginRequired, CategoryController.delete);
router.get('/', CategoryController.index);

export default router;
