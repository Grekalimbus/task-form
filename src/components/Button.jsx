import React from 'react';

const Button = ({ styles, title, handleDisplay, styleDisplay }) => {
  return handleDisplay ? (
    <button style={styleDisplay} onClick={handleDisplay} className={styles}>
      {title}
    </button>
  ) : (
    <button className={styles}>{title}</button>
  );
};

export default Button;
