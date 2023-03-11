import mongoose from 'mongoose';

const DataForm = mongoose.Schema({
  phone: { type: String, require: true },
  name: { type: String, require: true },
  message: { type: String, require: true },
});

export default mongoose.model('DataForm', DataForm);
