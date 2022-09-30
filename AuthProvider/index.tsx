/* eslint-disable react/jsx-no-useless-fragment */
import { onIdTokenChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { auth } from '../config';
import { Children } from '../interface';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { addUser } from '../redux/reducer/authReducer';
import { fetchProfile } from '../redux/reducer/profileReducer';

export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = ({ children }: Children) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        dispatch(addUser(user));
      } else {
        dispatch(addUser(undefined));
      }
      return true;
    });

    return unsubscribe;
  }, [dispatch, router]);

  useEffect(() => {
    if (!currentUser?.uid) return;
    dispatch(fetchProfile(currentUser.uid));
  }, [currentUser, dispatch]);

  return <>{children}</>;
};

export default AuthRoute;
