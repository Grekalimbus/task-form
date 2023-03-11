import React, { useEffect, useState } from 'react';
import Field from './Field';
import styles from './index.module.css';
import Button from './Button';
import validatorConfig from '../utils/validatorConfig';
import validator from '../utils/validator';
import { changePhone } from '../utils/changeForPhone';
import { toast } from 'react-toastify';

const Form = ({ display }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return toast.dark('Заполните правильно все участки формы');
    }
    if (isValid) {
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={displayCall}
      className={styles.formWrapper}
    >
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
