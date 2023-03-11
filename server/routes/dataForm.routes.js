import Router from 'express';

const router = new Router();

// post
router.post('/', async (req, res) => {
  PostController.create(req, res);
});
// getAll
router.get('/', async (req, res) => {
  PostController.getAll(req, res);
});
// getOne
router.get('/:id', async (req, res) => {
  PostController.getOne(req, res);
});
// put
router.put('/:id', async (req, res) => {
  PostController.upDate(req, res);
});
// delete
router.get('/:id', async (req, res) => {
  PostController.remove(req, res);
});

export default router;
