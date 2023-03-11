const validatorConfig = {
  phone: {
    isRequired: { message: 'Номер обязательнен для заполнения' },
    notPlus: {
      message: 'Перед вводом должен быть "+"',
    },
    notLength: {
      message: 'Кол-во цифр не соответсвует',
    },
    otherSymbolForPhone: {
      message: 'Разрешены только цифры',
    },
  },
  name: {
    isRequired: { message: 'Обязательно для заполнения' },
    otherSymbol: {
      message: 'Запрещаются спецсимволы',
    },
  },
  message: {
    isRequired: { message: 'Обязательно для заполнения' },
    otherSymbol: {
      message: 'Запрещаются спецсимволы',
    },
  },
};

export default validatorConfig;
