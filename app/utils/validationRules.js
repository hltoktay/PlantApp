const validation = (value, rules, form) => {
  let valid = true;

  for (let rule in rules) {
    switch (rule) {
      case "isRequired":
        valid = valid && validateRequired(value);
        break;

      case "isEmail":
        valid = valid && validateEmail(value);
        break;

      case "minLength":
        valid = valid && validateMinLength(value, rules[rule]);
        break;

      case "maxLength":
        valid = valid && validateMaxLength(value, rules[rule]);
        break;

      case "confirmPass":
        valid =
          valid && validateConfirmPass(value, form[rules.confirmPass].value);
        break;

      default:
        valid = true;
    }
  }

  return valid;
};

const validateRequired = value => {
  if (value !== "") {
    return true;
  }
  return false;
};

const validateEmail = email => {
  const expression = /[@].+\.[a-z0-9]{2,3}$/;
  return expression.test(String(email).toLocaleLowerCase());
};

const validateMinLength = (value, rulesValue) => {
  if (value.length >= rulesValue) {
    return true;
  }
  return false;
};

const validateMaxLength = (value, rulesValue) => {
  if (value.length <= rulesValue) {
    return true;
  }
  return false;
};

const validateConfirmPass = (confirmPass, pass) => {
  return confirmPass === pass;
};

export default validation;
