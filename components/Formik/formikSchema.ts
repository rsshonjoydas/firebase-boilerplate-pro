/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Your name is required.').min(3, 'Too short.').max(25, 'Too long.'),
  email: Yup.string().email('Invalid email.').required('The email is required.'),
  password: Yup.string().required('The password is required.').min(8, 'The password is too short.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
  termsAndConditions: Yup.boolean().oneOf([true], 'You need to accept the terms and conditions'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('The email is required.'),
  password: Yup.string().required('The password is required.').min(8, 'The password is too short.'),
});

export const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('The email is required.'),
});
