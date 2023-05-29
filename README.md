# **Feedback form**

# [Link demo application](https://task-form-htvv-git-main-grekalimbus-s-team.vercel.app/)

## Run locally
    cd client > npm start
    cd server > npm run dev

## About this project
## RU
Приложение - форма обратной связи. При открытии формы, пользователь видит 3 поля для заполнения. Первое поле - маска для RU номера телефона. Пользователь не может вводить ничего кроме цифр. Автоматически подставляются специальные символы, такие как скобки, тире и пробелы. Реализована валидация для каждого поля.
После отправки данных из формы, данные сохраняются в базе данных, пользователя перенаправляют на другую страницу, где отображаются данные загруженные с бэкенда (данные заполненной формы). Верстка адаптивная

## RU
Application - feedback form. When opening the form, the user sees 3 fields to fill out. The first field is a mask for the RU phone number. The user cannot enter anything other than numbers. Special characters such as brackets, dashes, and spaces are automatically substituted. Implemented validation for each field.
After sending the data from the form, the data is stored in the database, the user is redirected to another page, where the data loaded from the backend is displayed (filled form data). Adaptive layout
<br />

## Used technologies
    -JavaScript
    -ReactJS
    -NodeJS
    -MongoDB

# Presentation
![alt text](https://i.ibb.co/tQm2LFM/image.png)
![alt text](https://i.ibb.co/f2YKQrw/image.png)
![alt text](https://i.ibb.co/0yB3D27/image.png)
<br />

## Examples code this application
# Client
### [App.jsx](https://github.com/Grekalimbus/task-form/blob/main/client/src/App.jsx)
```js
function App() {
  const [display, setDisplayForm] = useState(false);
  const [styleButtonForm, setStyleButtonForm] = useState({ display: '' });
  const [styleButtonBack, setStyleButtonBack] = useState({ display: 'none' });

  const handleDisplay = () => {
    setDisplayForm((prevState) => (prevState = !prevState));
    if (!display) {
      setStyleButtonForm({ display: 'none' });
      setStyleButtonBack({ display: '' });
    } else {
      setStyleButtonForm({ display: '' });
      setStyleButtonBack({ display: 'none' });
    }
  };
  return (
    <Switch>
      <Route path="/result" exact>
        <PageResultForm />
      </Route>
      <Route path="/" exact>
        <div className={styles.app}>
          <ToastContainer />
          <Button
            styleDisplay={styleButtonForm}
            handleDisplay={handleDisplay}
            styles={styles.buttonGetForm}
            title={'Открыть форму'}
          />
          <Form display={display} />
          <Button
            styleDisplay={styleButtonBack}
            handleDisplay={handleDisplay}
            styles={styles.buttonBack}
            title={'Назад'}
          />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
```
<br />

### [dataForm.service.js](https://github.com/Grekalimbus/task-form/blob/main/client/src/services/dataForm.service.js)

```js
import axios from 'axios';

const url = 'http://localhost:3000/api';

const dataFormService = {
  post: async (dataForm) => {
    try {
      const data = axios.post(url + '/dataForm', dataForm);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  get: async (dataForm) => {
    try {
      const data = axios.get(url + '/dataForm', dataForm);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default dataFormService;
```
<br />

### [Main component Form.jsx](https://github.com/Grekalimbus/task-form/blob/main/client/src/components/page/pageForm/Form.jsx)
```js
const Form = ({ display }) => {
  const history = useHistory();
  const [dataForm, setDataForm] = useState({
    phone: '+7 ',
    name: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    validate();
  }, [dataForm]);

  const validate = () => {
    const errors = validator(dataForm, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  function checkDisplay(display) {
    return !display ? { display: 'none' } : { display: '' };
  }
  let validateKeyCode = '';
  function checkKeyDown(e) {
    validateKeyCode = e.keyCode;
  }

  function handleChangeData(e) {
    const { target } = e;
    changePhone(target, validateKeyCode, setDataForm);
  }

  const displayCall = checkDisplay(display);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return toast.dark('Заполните правильно все участки формы');
    }
    if (isValid) {
      toast.dark('Данные отправляються на сервер');
      await dataFormService.post(dataForm);
      setTimeout(() => {
        history.push('/result');
      }, 1500);
    }
  };
  return (
    <form onSubmit={handleSubmit} style={displayCall} className={styles.formWrapper}>
      <h2 className={styles.title}>Форма обратной связи</h2>
      <Field
        checkKeyDown={checkKeyDown}
        error={errors.phone}
        handleChangeData={handleChangeData}
        name="phone"
        value={dataForm.phone}
        title="Номер телефона"
        styles={styles}
      />
      <Field
        error={errors.name}
        handleChangeData={handleChangeData}
        name="name"
        value={dataForm.name}
        title="Имя"
        styles={styles}
      />
      <Field
        error={errors.message}
        handleChangeData={handleChangeData}
        name="message"
        value={dataForm.message}
        title="Сообщение"
        styles={styles}
      />
      <Button styles={styles.button} title={'Submit'} />
    </form>
  );
};

export default Form;
```
<br />

### [Field.jsx](https://github.com/Grekalimbus/task-form/blob/main/client/src/components/page/pageForm/Field.jsx)
```js
const Field = ({
  styles,
  title,
  name,
  value,
  handleChangeData,
  error,
  checkKeyDown,
}) => {
  return (
    <div className={styles.fieldOneInput}>
      <label htmlFor="" className={styles.label}>
        {title}
      </label>
      {error ? (
        <p className={styles.titleError}>{error}</p>
      ) : (
        <p className={styles.titleError}></p>
      )}
      <input
        placeholder={title}
        onKeyDown={checkKeyDown}
        onChange={(e) => handleChangeData(e)}
        name={name}
        value={value}
        type="text"
        className={styles.input}
      />
    </div>
  );
};

export default Field;
```
<br />

### [PageResultForm.jsx](https://github.com/Grekalimbus/task-form/blob/main/client/src/components/page/pageResultForm/PageResultForm.jsx)
```js
const PageResultForm = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const { data } = await dataFormService.get();
      if (data) {
        setData(data[0]);
        console.log(data[0]);
      }
    };
    getData();
  }, []);
  return !data ? (
    <h1 style={{ color: '#ffffff' }}>Loading</h1>
  ) : (
    <div className={styles.wrapp}>
      <h2 className={styles.h2}>Номер: {data?.phone}</h2>
      <h2 className={styles.h2}>Имя: {data?.name}</h2>
      <h2 className={styles.h2}>Сообщение: {data?.message}</h2>
    </div>
  );
};

export default PageResultForm;
```
<br />

## Utils
### [validator.js](https://github.com/Grekalimbus/task-form/blob/main/client/src/utils/validator.js)
```js
const numberStr = '0123456789';
const specialСharacters = '`@!#$%^&*()_+=-~?/>.<,:;"{}]["№;%:? ';

function validateDigits(s) {
  return /^\d+$/.test(s);
}
function checkOtherSymbol(data) {
  let statusValidate = true;
  for (let i = 0; i < data.length; i++) {
    if (specialСharacters.includes(data[i]) || numberStr.includes(data[i])) {
      statusValidate = false;
    }
  }
  return statusValidate;
}
function checkOtherSymbolForPhone(data) {
  if (data[3] === '(' && data[7] === ')') {
    const newData = data
      .trim()
      .replace('(', '')
      .replace(')', '')
      .replace('+', '')
      .replaceAll(' ', '')
      .replaceAll('-', '');
    return validateDigits(newData);
  } else {
    return false;
  }
}
function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config, allData) {
    switch (validateMethod) {
      case 'isRequired':
        if (data.trim() === '') return config.message;
        break;
      case 'notPlus':
        const dataTrim = data.trim();
        if (dataTrim[0] !== '+') {
          return config.message;
        }
        break;
      case 'otherSymbolForPhone':
        if (data.length > 7 && !checkOtherSymbolForPhone(data)) {
          return config.message;
        }
        break;
      case 'notLength':
        if (data.length < 18) {
          return config.message;
        }
        break;
      case 'otherSymbol':
        if (!checkOtherSymbol(data)) {
          return config.message;
        }
        break;
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod],
        data
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
}
export default validator;
```
<br />

# Backend
### [app.js](https://github.com/Grekalimbus/task-form/blob/main/server/app.js)
```js
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
```
<br />

### [DataForm.js](https://github.com/Grekalimbus/task-form/blob/main/server/models/DataForm.js)
Model

```js
import mongoose from 'mongoose';

const DataForm = mongoose.Schema({
  phone: { type: String, require: true },
  name: { type: String, require: true },
  message: { type: String, require: true },
});

export default mongoose.model('DataForm', DataForm);
```

### [dataForm.routes.js](https://github.com/Grekalimbus/task-form/blob/main/server/routes/dataForm.routes.js)
```js
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
```
<br />

### [dataFormController.js](https://github.com/Grekalimbus/task-form/blob/main/server/controller/DataFormController.js)
```js
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
```
<br />

### [dataForm.service.js](https://github.com/Grekalimbus/task-form/blob/main/server/services/dataForm.service.js)
```js
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
```
<br />
