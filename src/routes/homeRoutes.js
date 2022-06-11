import { Router } from 'express';
import homeController from '../controllers/HomeController'; // letra minuscula pois o que vem é da clesse é um obj e não a classe

const router = new Router();

router.get('/', homeController.index);

export default router;
