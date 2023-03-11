import React from 'react';

const Field = ({ styles, title, name, value, handleChangeData }) => {
  return (
    <div className={styles.fieldOneInput}>
      <label htmlFor="" className={styles.label}>
        {title}
      </label>
      <input
        onChange={(e) => handleChangeData(e)}
        name={name}
        value={value}
        type="text"
        className={styles.input}
      />
    </div>
  );
};

export default Field;
