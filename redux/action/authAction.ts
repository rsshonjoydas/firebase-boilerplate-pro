import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  setPersistence,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../config';
import { ILogin, IRegister } from '../../interface/authType';
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

const authAction = {
  register,
  verify,
  login,
};

export default authAction;
