import React from 'react';
import Field from './Field';
import styles from './index.module.css';
import Button from './Button';
import { useState } from 'react';

const Form = ({ display }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('f');
  };
  function checkDisplay(display) {
    return !display ? { display: 'none' } : { display: '' };
  }
  const displayCall = checkDisplay(display);

  return (
    <form
      onSubmit={handleSubmit}
      style={displayCall}
      className={styles.formWrapper}
    >
      <h2 className={styles.title}>Форма обратной связи</h2>
      <Field styles={styles} />
      <Field styles={styles} />
      <Field styles={styles} />
      <Button styles={styles.button} title={'Submit'} />
    </form>
  );
};

export default Form;
