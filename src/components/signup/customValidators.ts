import validator from 'validator';

export function passwordMatch(
  value: string,
  form: HTMLFormElement
): { passwordMatch: boolean } {
  if (value !== form.values.password) {
    return { passwordMatch: true };
  }
}

export function containNumbers(numbers: number) {
  return function (value: string): { containNumbers: number } {
    if (value.replace(/[^0-9]/g, '').length < numbers) {
      return { containNumbers: numbers };
    }
  };
}

export const passwordCheck = (value: string): null | { strong: string } =>
  validator.isStrongPassword(value, {
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 2
  })
    ? null
    : { strong: 'Invalid password' };
