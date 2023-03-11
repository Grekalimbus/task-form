import Router from 'express';
import dataForm from './dataForm.routes.js';

const router = new Router();

router.use('/dataForm', dataForm);
export default router;
