import React from 'react';

const Field = ({ styles }) => {
  return (
    <div className={styles.fieldOneInput}>
      <label htmlFor="" className={styles.label}>
        Номер
      </label>
      <input type="text" className={styles.input} />
    </div>
  );
};

export default Field;
