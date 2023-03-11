import React, { useEffect, useState } from 'react';
import Field from './Field';
import styles from './index.module.css';
import Button from './Button';
import validatorConfig from '../utils/validatorConfig';
import validator from '../utils/validator';

const Form = ({ display }) => {
  const [dataForm, setDataForm] = useState({
    phone: '+7 ',
    name: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    validate();
    console.log(errors);
  }, [dataForm]);

  const validate = () => {
    const errors = validator(dataForm, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function checkDisplay(display) {
    return !display ? { display: 'none' } : { display: '' };
  }

  function handleChangeData(e) {
    const { target } = e;
    if (target.name === 'phone') {
      let value = target.value.length;
      console.log(value);
      if (value === 12 || value === 15) {
        target.value = target.value + ' ';
      }
      if (value === 4) {
        const newStr = `${target.value.slice(0, 3)}`;
        target.value = newStr + '(' + target.value[3];
      }
      if (value === 7) {
        target.value = target.value + ') ';
      }
      setDataForm((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    } else {
      setDataForm((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
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
