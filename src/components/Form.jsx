import React from 'react';
import Field from './Field';
import styles from './index.module.css';
import Button from './Button';
import { useState } from 'react';

const Form = () => {
  const handleSubmit = () => {
    console.log('f');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <h2 className={styles.title}>Форма обратной связи</h2>
      <Field styles={styles} />
      <Field styles={styles} />
      <Field styles={styles} />
      <Button styles={styles.button} title={'Submit'} />
    </form>
  );
};

export default Form;
