import dataFormService from '../services/dataForm.service';

class DataFormController {
  async create(req, res) {
    try {
      const data = await dataFormService.create(req.body);
      res.json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const data = await dataFormService.getAll();
      res.json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(500).json('Айди не указан');
      }
      const data = await dataFormService.getOne(id);
      res.json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async upDate(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(500).json('Айди не указан');
      }
      const data = await dataFormService.upDate(id);
      res.json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async remove(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(500).json('Айди не указан');
      }
      const data = await dataFormService.remove(id);
      res.json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new DataFormController();
