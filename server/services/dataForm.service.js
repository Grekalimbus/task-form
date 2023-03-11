import DataForm from '../models/DataForm.js';

class PostService {
  async create(data) {
    await DataForm.deleteMany({});
    const createdPost = await DataForm.create(data);
    return createdPost;
  }
  async getAll() {
    const dataFormsAll = await DataForm.find();
    return dataFormsAll;
  }
}

export default new PostService();
