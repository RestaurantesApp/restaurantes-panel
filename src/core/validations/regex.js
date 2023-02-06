const availableDomains = `yahoo|hotmail|gmail|live|outlook`;

export const typeRegex = {
  // Base validations
  regexOnlyNumber: /^[0-9]+$/i,
  regexOnlyLetters: /^[a-zA-Z ]+$/i,
  regexOnlyLettersExtend: /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/i,
  regexAlphanumeric: /^[a-zA-Z 0-9]+$/i,
  regexAlphanumericExtend: /^[a-zA-ZÀ-ÿ\u00f1\u00d1 0-9]+$/i,

  // Group validations
  regexValidateEmail:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  regexValidateEmailDomain: new RegExp(
    `(\\W|^)[\\w.\\-]{0,33}@(${availableDomains})(\\.com|\\.es|\\.hn)(\\W|$)`,
  ),
};
