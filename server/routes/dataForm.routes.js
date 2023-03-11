import Router from 'express';
import DataFormController from '../controller/DataFormController.js';
const router = new Router();

// post
router.post('/', async (req, res) => {
  DataFormController.create(req, res);
});
// getAll
router.get('/', async (req, res) => {
  DataFormController.getAll(req, res);
});

export default router;
