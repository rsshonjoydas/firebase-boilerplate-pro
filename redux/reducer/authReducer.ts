/* eslint-disable no-param-reassign */
/* eslint-disable no-return-await */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, IRegister } from '../../interface/authType';
import authAction from '../action/authAction';

export const register = createAsyncThunk(
  'auth/register',
  async (user: IRegister) => await authAction.register(user)
);

export const verify = createAsyncThunk(
  'auth/verify',
  async (user: any) => await authAction.verify(user)
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
