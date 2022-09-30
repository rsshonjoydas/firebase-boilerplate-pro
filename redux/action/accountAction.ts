import { updateCurrentUser, updateProfile } from 'firebase/auth';
import { auth } from '../../config';
import { IAuth } from '../../interface/authType';
import firebaseError from '../../utils/firebaseError';

export const changeAvatar = async (user: IAuth, url: string) => {
  try {
    await updateProfile(user, { photoURL: url });
    await updateCurrentUser(auth, user);
  } catch (err: any) {
    return firebaseError(err);
  }
  return true;
};
