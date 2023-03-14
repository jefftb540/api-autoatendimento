import { Router } from 'express';
import tutorialController from '../controllers/tutorialController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, tutorialController.create);
router.put('/:id', loginRequired, tutorialController.update);
router.get('/:id', tutorialController.show);
router.delete('/:id', loginRequired, tutorialController.delete);
router.get('/', tutorialController.index);

export default router;
