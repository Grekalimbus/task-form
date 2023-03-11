export function changePhone(target, validateKeyCode, setDataForm) {
  let transormSTR = target.value;
  if (target.name === 'phone') {
    let value = target.value.length;
    if (
      target.value[target.value.length - 1] !== '-' &&
      target.value.length <= 18
    ) {
      if (validateKeyCode !== 8 && value === 2) {
        transormSTR =
          target.value[0] +
          target.value[1] +
          target.value[2] +
          '(' +
          target.value[3];
      }
      if (validateKeyCode !== 8 && value === 3) {
        const lastSymbol = target.value[target.value.length - 1];
        const sliceStr = transormSTR.slice(0, -1);
        transormSTR = sliceStr + ' (' + lastSymbol;
      }
      if (validateKeyCode !== 8 && value === 4) {
        transormSTR =
          target.value[0] +
          target.value[1] +
          target.value[2] +
          '(' +
          target.value[3];
      }
      if (validateKeyCode !== 8 && value === 7) {
        transormSTR = transormSTR += ') ';
      }
      if (validateKeyCode !== 8 && value === 8) {
        const lastSymbol = target.value[target.value.length - 1];
        const sliceStr = transormSTR.slice(0, -1);
        transormSTR = sliceStr + ') ' + lastSymbol;
      }
      if (validateKeyCode !== 8 && value === 9) {
        const lastSymbol = target.value[target.value.length - 1];
        const sliceStr = transormSTR.slice(0, -1);
        transormSTR = sliceStr + ' ' + lastSymbol;
      }
      if (validateKeyCode !== 8 && value === 13) {
        const lastSymbol = target.value[target.value.length - 1];
        const sliceStr = transormSTR.slice(0, -1);
        transormSTR = sliceStr + '-' + lastSymbol;
      }
      if (validateKeyCode !== 8 && value === 16) {
        const lastSymbol = target.value[target.value.length - 1];
        const sliceStr = transormSTR.slice(0, -1);
        transormSTR = sliceStr + '-' + lastSymbol;
      }
      setDataForm((prevState) => ({
        ...prevState,
        [target.name]: transormSTR,
      }));
    } else if (
      target.value[target.value.length - 1] === '-' &&
      validateKeyCode === 8
    ) {
      setDataForm((prevState) => ({
        ...prevState,
        [target.name]: transormSTR,
      }));
    }
  } else {
    setDataForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }
}
