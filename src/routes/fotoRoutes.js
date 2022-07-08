import { Router } from 'express';
import fotoController from '../controllers/FotoController'; // letra minuscula pois o que vem é da clesse é um obj e não a classe
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);
router.get('/', fotoController.index);

export default router;
