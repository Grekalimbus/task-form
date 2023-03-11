const validatorConfig = {
  phone: {
    isRequired: { message: 'Номер обязательнен для заполнения' },
    correctPhone: {
      message: 'Данные не корректны',
    },
  },
  name: {
    isRequired: { message: 'Обязательно для заполнения' },
  },
  message: {
    isRequired: { message: 'Обязательно для заполнения' },
  },
};

export default validatorConfig;
