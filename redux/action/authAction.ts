import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../config';
import { IRegister } from '../../interface/authType';
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

const authAction = {
  register,
  verify,
};

export default authAction;