import { NextRouter } from 'next/router';
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-await */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, ILogin, IRegister } from '../../interface/authType';

import authAction from '../action/authAction';

export const register = createAsyncThunk(
  'auth/register',
  async (user: IRegister) => await authAction.register(user)
);

export const verify = createAsyncThunk(
  'auth/verify',
  async (user: any) => await authAction.verify(user)
);

export const login = createAsyncThunk(
  'auth/login',
  async (user: ILogin) => await authAction.login(user)
);

export const google = createAsyncThunk(
  'auth/google',
  async (router: NextRouter) => await authAction.google(router)
);

export const facebook = createAsyncThunk(
  'auth/facebook',
  async (router: NextRouter) => await authAction.facebook(router)
);

const initialState: AuthState = {
  currentUser: undefined,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type.startsWith('auth') && type.endsWith('/pending'),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        ({ type }) => type.startsWith('auth') && type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
