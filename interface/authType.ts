import * as FireAuth from 'firebase/auth';
import { NextRouter } from 'next/router';

export interface IAuth extends FireAuth.User {}

export interface AuthState {
  currentUser?: IAuth;
  loading: boolean;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  termsAndConditions?: boolean;
  router?: NextRouter;
}

export interface ILogin {
  email: string;
  password: string;
  remember?: boolean;
  router?: NextRouter;
}
