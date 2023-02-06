import { typeRegex } from './regex';
import { typesValidation } from '../../common/types';

const {
  regexOnlyNumber,
  regexOnlyLetters,
  regexOnlyLettersExtend,
  regexAlphanumeric,
  regexAlphanumericExtend,
  regexValidateEmail,
  regexValidateEmailDomain,
} = typeRegex;

const {
  onlyNumber,
  onlyLetters,
  onlyLettersExtend,
  onlyAlphanumeric,
  onlyAlphanumericExtend,
  validateEmail,
  validateEmailDomain,
} = typesValidation;

export const validTextInput = (value = '', type = '') => {
  let isValid = true;
  switch (type) {
    case onlyNumber:
      isValid = regexOnlyNumber.test(value) ? true : false;
      break;
    case onlyLetters:
      isValid = regexOnlyLetters.test(value) ? true : false;
      break;
    case onlyLettersExtend:
      isValid = regexOnlyLettersExtend.test(value) ? true : false;
      break;
    case onlyAlphanumeric:
      isValid = regexAlphanumeric.test(value) ? true : false;
      break;
    case onlyAlphanumericExtend:
      isValid = regexAlphanumericExtend.test(value) ? true : false;
      break;
    default:
      isValid = true;
      break;
  }
  return isValid;
};

export const validInputEmail = (value, type) => {
  let isValid = true;
  switch (type) {
    case validateEmail:
      isValid = regexValidateEmail.test(value) ? true : false;
      break;
    case validateEmailDomain:
      isValid = regexValidateEmailDomain.test(value) ? true : false;
      break;
    default:
      isValid = true;
      break;
  }
  return isValid;
};

export const validInputInitialNumbers = (value = '', initialNumbers = []) => {
  let isValid = true;
  isValid = regexOnlyNumber.test(value) ? true : false;
  if (isValid) {
    let isValidNumber = false;
    initialNumbers.map(number => {
      if (number === parseFloat(value.charAt(0))) {
        isValidNumber = true;
      }
      return null;
    });
    isValid = isValidNumber;
  }
  return isValid;
};
