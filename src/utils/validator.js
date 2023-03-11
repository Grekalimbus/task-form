function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config, allData) {
    switch (validateMethod) {
      case 'isRequired':
        if (data.trim() === '') return config.message;
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
