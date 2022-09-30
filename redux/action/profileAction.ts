import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { firestore } from '../../config/index';
import { IAuth, IProfile } from '../../interface/authType';
import firebaseError from '../../utils/firebaseError';

export const changeProfiles = async (user: IAuth, data: IProfile) => {
  try {
    await setDoc(doc(firestore, 'users', user.uid), data);
    toast.success('Profile Updated Successfully.');
  } catch (err: any) {
    return firebaseError(err);
  }
  return true;
};

export const getProfile = async (uid: string) => {
  try {
    const docRef = doc(firestore, `users/${uid}`);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data();
  } catch (err: any) {
    return firebaseError(err);
  }
  return true;
};
