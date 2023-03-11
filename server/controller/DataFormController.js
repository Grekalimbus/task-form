import dataFormService from '../services/dataForm.service.js';

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
}

export default new DataFormController();
