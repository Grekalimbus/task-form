const specialСharacters = '`@!#$%^&*()_+=-~?/>.<,:;"{}]["№;%:? ';
const usuallyСharacters =
  'qwertyuioplkjhgfdsazxcvbnmйцукенгшщздлорпавыфячсмить';
const numberStr = '0123456789';

function validateDigits(s) {
  return /^\d+$/.test(s);
}

function checkOtherSymbolForPhone(data) {
  if (data[3] === '(' && data[7] === ')') {
    const newData = data
      .trim()
      .replace('(', '')
      .replace(')', '')
      .replace('+', '')
      .replaceAll(' ', '')
      .replaceAll('-', '');
    return validateDigits(newData);
  } else {
    return false;
  }
}
function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config, allData) {
    switch (validateMethod) {
      case 'isRequired':
        if (data.trim() === '') return config.message;
        break;
      case 'notPlus':
        const dataTrim = data.trim();
        if (dataTrim[0] !== '+') {
          return config.message;
        }
        break;
      case 'otherSymbol':
        if (data.length > 7 && !checkOtherSymbolForPhone(data)) {
          return config.message;
        }
        break;
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod],
        data
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
}
export default validator;
