import express from 'express';
import mongoose from 'mongoose';
// import router from './routes/index.js';
import fileUpload from 'express-fileupload';
import DataForm from './models/DataForm.js';

const PORT = 3000;
const URL =
  'mongodb+srv://danil:mongoose123@node-course.twnp2ms.mongodb.net/task-form?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
// app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).json('Request Get');
});
app.post('/', async (req, res) => {
  try {
    const post = await DataForm.create(req.body);
    res.json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

async function started() {
  try {
    await mongoose.connect(URL);
    console.log('Conect MongoDB!!!');
    app.listen(PORT, () => {
      console.log(`SERVER STARTED ON PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}
started();
