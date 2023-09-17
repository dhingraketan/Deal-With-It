export const environment = {
  production: false,
  BASE_URL: 'http://192.168.1.97:3000/',
  CUSTOMER_BASE_URL: 'http://192.168.1.97:3000/customers/',
  CUSTOMER: {
    ADD_CUSTOMER: 'add',
    GET_CUSTOMER: 'getCustomer'
  },

  PHONE_BASE_URL: 'http://192.168.1.97:3000/phones/',
  PHONE: {
    ADD_PHONE: 'add',
    GET_ANDROID_PHONE: 'getAndroidPhones',
    GET_IOS_PHONE: 'getIosPhones'
  },

  REP_BASE_URL: 'http://192.168.1.97:3000/reps/',
  REP: {
    REP_LOGIN: 'login',
    REP_REGISTER: 'register'
  }
};