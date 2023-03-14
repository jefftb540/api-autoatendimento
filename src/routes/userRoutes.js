import { Router } from 'express';
import UserController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, UserController.create);
router.put('/:id', loginRequired, UserController.update);
router.get('/:id', loginRequired, UserController.show);
router.delete('/:id', loginRequired, UserController.delete);
router.get('/', loginRequired, UserController.index);

export default router;
