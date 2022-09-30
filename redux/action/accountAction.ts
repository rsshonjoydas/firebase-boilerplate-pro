/* eslint-disable consistent-return */
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  updateCurrentUser,
  updateProfile,
} from 'firebase/auth';
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

export const changeDisplayName = async (user: IAuth, name: string) => {
  try {
    await updateProfile(user, { displayName: name });
    await updateCurrentUser(auth, user);
  } catch (err: any) {
    return firebaseError(err);
  }
  return true;
};

const reAuth = async (user: IAuth, pass: string) => {
  try {
    const { providerId } = user.providerData[0];
    // ? Password
    if (providerId === 'password') {
      if (!user.email) return;
      const credential = EmailAuthProvider.credential(user.email, pass);
      await reauthenticateWithCredential(user, credential);
    }
    // ? Google
    if (providerId === 'google.com') {
      await reauthenticateWithPopup(user, new GoogleAuthProvider());
    }
    // ? Facebook
    if (providerId === 'facebook.com') {
      await reauthenticateWithPopup(user, new FacebookAuthProvider());
    }
  } catch (err: any) {
    return true;
  }
};
