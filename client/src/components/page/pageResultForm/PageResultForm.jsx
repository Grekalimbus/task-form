import React, { useEffect, useState } from 'react';
import dataFormService from '../../../services/dataForm.service';
import styles from './index.module.css';

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
