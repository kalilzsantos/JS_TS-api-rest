import { Router } from 'express';
import tokenController from '../controllers/TokenController'; // letra minuscula pois o que vem é da clesse é um obj e não a classe

const router = new Router();

router.post('/', tokenController.store);

export default router;
