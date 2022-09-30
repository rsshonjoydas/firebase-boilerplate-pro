/* eslint-disable no-return-await */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth, IProfile } from '../../interface/authType';
import { changeProfiles, getProfile } from '../action/profileAction';

export const profileUpdate = createAsyncThunk(
  'profile/update',
  async (params: { user: IAuth; data: IProfile }) => {
    const { user, data } = params;
    return await changeProfiles(user, data);
  }
);

export const fetchProfile = createAsyncThunk(
  'profile/fetch',
  async (uid: string) => await getProfile(uid)
);

export interface ProfileState {
  profile?: IProfile;
}

const initialState: ProfileState = {
  profile: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      ({ type }) => type.startsWith('profile') && type.endsWith('/fulfilled'),
      (state, action: PayloadAction<IProfile | undefined>) => {
        state.profile = action.payload;
      }
    );
  },
});

export default profileSlice.reducer;
