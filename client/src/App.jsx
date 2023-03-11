import React, { useState } from 'react';
import Button from './components/page/pageForm/Button';
import Form from './components/page/pageForm/Form';
import styles from './index.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch, Route } from 'react-router-dom';
import PageResultForm from './components/page/pageResultForm/PageResultForm';

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
