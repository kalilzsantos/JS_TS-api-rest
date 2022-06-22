import { Router } from 'express';
import userController from '../controllers/UserController'; // letra minuscula pois o que vem é da clesse é um obj e não a classe
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
