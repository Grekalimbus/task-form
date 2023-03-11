import React from 'react';
import Button from './components/Button';
import Form from './components/Form';
import styles from './index.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Button styles={styles.button} title={'Открыть форму'} />
      <Form />
    </div>
  );
}

export default App;
