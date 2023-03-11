import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const PORT = 3000;
const URL =
  'mongodb+srv://danil:tf11032023@task-form.1xvszi5.mongodb.net/task-form?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  next();
});
app.use(
  cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);
app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).json('Request Get');
});

async function started() {
  try {
    mongoose.set('strictQuery', true);
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
