import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';
import { auth } from '../../config';
import { IForgotPassword, ILogin, IRegister } from '../../interface/authType';

import firebaseError from '../../utils/firebaseError';

const register = async (user: IRegister) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, user.email, user.password);
    toast.success('Activate your email');

    await updateProfile(res.user, {
      displayName: user.name,
    });

    await sendEmailVerification(res.user);
    user.router?.push('/');
    return res.user;
  } catch (err: any) {
    return firebaseError(err);
  }
};

const verify = async (user: any) => {
  try {
    await sendEmailVerification(user);
    toast.success('Activate your email');
    user.router?.push('/');
  } catch (err: any) {
    return firebaseError(err);
  }
  return true;
};

const login = async (user: ILogin) => {
  try {
    const { email, password, remember } = user;

    await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);

    const res = await signInWithEmailAndPassword(auth, email, password);

    user.router?.push('/');

    return res.user;
  } catch (err: any) {
    return firebaseError(err);
  }
};

const google = async (router: NextRouter) => {
  try {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());

    router?.push('/');

    return res.user;
  } catch (err: any) {
    return firebaseError(err);
  }
};

const facebook = async (router: NextRouter) => {
  try {
    const res = await signInWithPopup(auth, new FacebookAuthProvider());

    router?.push('/');

    return res.user;
  } catch (err: any) {
    return firebaseError(err);
  }
};

const forgotPassword = async (user: IForgotPassword) => {
  try {
    await sendPasswordResetEmail(auth, user.email);

    user.router?.push('/login');

    return toast.success('Success! Check your email.');
  } catch (err: any) {
    return firebaseError(err);
  }
};

const logout = async (router: NextRouter) => {
  try {
    await signOut(auth);
    router.push('/login');
  } catch (err: any) {
    return firebaseError(err);
  }
  return true;
};

const authAction = {
  register,
  verify,
  login,
  google,
  facebook,
  forgotPassword,
  logout,
};

export default authAction;
