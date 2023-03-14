import { Router } from 'express';
import stepController from '../controllers/stepController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, stepController.create);
router.put('/:id', loginRequired, stepController.update);
router.get('/:id', stepController.show);
router.delete('/:id', loginRequired, stepController.delete);
router.get('/', stepController.index);

export default router;
