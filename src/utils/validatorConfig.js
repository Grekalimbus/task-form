const validatorConfig = {
  phone: {
    isRequired: { message: 'Номер обязательнен для заполнения' },
    notPlus: {
      message: 'Перед вводом должен быть "+"',
    },
    notLength: {
      message: 'Кол-во цифр не соответсвует',
    },
    otherSymbol: {
      message: 'Разрешены только цифры',
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
