/* eslint-disable react/jsx-no-useless-fragment */
import { getAuth, onIdTokenChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Children } from '../interface';
import { useAppDispatch } from '../redux/hook';
import { addUser } from '../redux/reducer/authReducer';

export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = ({ children }: Children) => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const router = useRouter();

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

  return <>{children}</>;
};

export default AuthRoute;
