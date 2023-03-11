import DataForm from '../models/DataForm.js';

class PostService {
  async create(data) {
    const createdPost = await DataForm.create({ ...data });
    return createdPost;
  }
  async getAll() {
    const dataFormsAll = await DataForm.find();
    return dataFormsAll;
  }
  async getOne(id) {
    const dataFormsOne = await DataForm.findById(id);
    return dataFormsOne;
  }
  async upDate(id) {
    const dataFormsUpdate = await DataForm.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return dataFormsUpdate;
  }
  async remove(id) {
    const dataFormsRemove = await DataForm.findByIdAndDelete(id);
    return dataFormsRemove;
  }
}

export default new PostService();
