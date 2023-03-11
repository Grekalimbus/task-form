import React, { useState } from 'react';
import Button from './components/Button';
import Form from './components/Form';
import styles from './index.module.css';

function App() {
  const [display, setDisplayForm] = useState(false);
  const [styleButtonForm, setStyleButtonForm] = useState({ display: '' });
  const [styleButtonBack, setStyleButtonBack] = useState({ display: 'none' });

  const handleDisplay = () => {
    console.log('fd');
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
    <div className={styles.app}>
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
  );
}

export default App;
