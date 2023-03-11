import React from 'react';
import Field from './Field';
import styles from './index.module.css';
import Button from './Button';
import { useState } from 'react';

const Form = ({ display }) => {
  const [dataForm, setDataForm] = useState({
    phone: '',
    name: '',
    message: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  function checkDisplay(display) {
    return !display ? { display: 'none' } : { display: '' };
  }
  function handleChangeData(e) {
    const { target } = e;
    setDataForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  }
  const displayCall = checkDisplay(display);

  return (
    <form
      onSubmit={handleSubmit}
      style={displayCall}
      className={styles.formWrapper}
    >
      <h2 className={styles.title}>Форма обратной связи</h2>
      <Field
        handleChangeData={handleChangeData}
        name="phone"
        value={dataForm.phone}
        title="Номер телефона"
        styles={styles}
      />
      <Field
        handleChangeData={handleChangeData}
        name="name"
        value={dataForm.name}
        title="Имя"
        styles={styles}
      />
      <Field
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
