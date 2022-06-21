import { Router } from 'express';
import userController from '../controllers/UserController'; // letra minuscula pois o que vem é da clesse é um obj e não a classe
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.create);
router.get('/', loginRequired, userController.index);
router.get('/:id', loginRequired, userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
