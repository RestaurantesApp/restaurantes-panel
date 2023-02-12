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

export const validTextInput = (value, type) => {
  switch (type) {
    case typesValidation.onlyNumber:
      return regexOnlyNumber.test(value);
    case typesValidation.onlyLetters:
      return regexOnlyLetters.test(value);
    case typesValidation.onlyLettersExtend:
      return regexOnlyLettersExtend.test(value);
    case typesValidation.onlyAlphanumeric:
      return regexAlphanumeric.test(value);
    case typesValidation.onlyAlphanumericExtend:
      return regexAlphanumericExtend.test(value);
    default:
      return true;
  }
};

export const validInputEmail = (value, type) => {
  switch (type) {
    case typesValidation.validateEmail:
      return regexValidateEmail.test(value);
    case typesValidation.validateEmailDomain:
      return regexValidateEmailDomain.test(value);
    default:
      return true;
  }
};

export const validInputInitialNumbers = (value, initialNumbers) => {
  let isValid = true;
  isValid = regexOnlyNumber.test(value);
  if (isValid) {
    let isValidNumber = false;
    initialNumbers.forEach(number => {
      if (number === parseFloat(value.charAt(0))) isValidNumber = true;
    });
    isValid = isValidNumber;
  }
  return isValid;
};
