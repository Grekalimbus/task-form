import React from 'react';

const Field = ({
  styles,
  title,
  name,
  value,
  handleChangeData,
  error,
  checkKeyDown,
}) => {
  return (
    <div className={styles.fieldOneInput}>
      <label htmlFor="" className={styles.label}>
        {title}
      </label>
      {error ? (
        <p className={styles.titleError}>{error}</p>
      ) : (
        <p className={styles.titleError}></p>
      )}
      <input
        placeholder={title}
        onKeyDown={checkKeyDown}
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
