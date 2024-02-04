export const emailRegex =
  /^[a-zA-Z0-9._:$!%-]+[+]?[0-9]*@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
export const pwdRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=~`!*()_\-{}[\]|\\:;'"<>,./?]).{6,}$/;
export const minCharRegex = /([a-zA-Z0-9@#$%^&+=]*).{8,}/;
export const upperCharRegex = /[A-Z]/;
export const lowerCharRegex = /[a-z]/;
export const specialCharRegex = /[@#$%^&+=~`!*()_\-{}[\]|\\:;'"<>,./?]/;
export const atLeastOneNumberRegex = /^(?=.*\d).+$/;
export const capitalLetterRegex = /(?=[A-Z])/;
export const onlyNumber = /^\d+$/;
