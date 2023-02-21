import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {Status} from '../util/Status.enum';
import {ILoginParams} from './ILoginParams';
import {loadUser, loginUser, signUpUser} from './userApi';
import {ISignUpParams} from './ISignUpParams';
import {IUserState} from './IUserState';

// agarkova.al+tms@yandex.ru
// 123TMS!@
const initialState: IUserState = {
    userName: '',
    isAuthenticated: false,
    status: Status.IDLE,
    loginStatus: Status.IDLE,
    accessToken: '',
    refreshToken: ''
}

export const userLoginAsync = createAsyncThunk(
  'user/loginUser',
  async (params: ILoginParams, thunkAPI) => {
    try {
      const response = await loginUser(params);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const userSignUpAsync = createAsyncThunk(
  'user/signUpUser',
  async (params: ISignUpParams, thunkAPI) => {
    try {
      const response = await signUpUser(params);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const loadUserAsync = createAsyncThunk(
  'user/loadUser',
  async (token: string, thunkAPI) => {
    try {
      const response = await loadUser(token);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthenticated: (state: IUserState, action) => {
            state.isAuthenticated = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLoginAsync.rejected, (state: IUserState) => {
                state.loginStatus = Status.FAILED;
            })
            .addCase(userLoginAsync.pending, (state: IUserState) => {
                state.loginStatus = Status.LOADING;
            })
            .addCase(userLoginAsync.fulfilled, (state: IUserState, action) => {
                state.loginStatus = Status.IDLE;
                state.isAuthenticated = true;

                state.accessToken = action.payload.access;
                state.refreshToken = action.payload.refresh;
            })
            .addCase(loadUserAsync.rejected, (state: IUserState) => {
                state.status = Status.FAILED;
            })
            .addCase(loadUserAsync.pending, (state: IUserState) => {
                state.status = Status.LOADING;
            })
            .addCase(loadUserAsync.fulfilled, (state: IUserState, action) => {
                state.status = Status.IDLE;

                state.userName = action.payload.username;
            })
        ;
    }
});

export const { setAuthenticated } = userSlice.actions;

export const selectAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUserLoginStatus = (state: RootState) => state.user.loginStatus;
export const selectUserName = (state: RootState) => state.user.userName;
export const selectAccessToken = (state: RootState) => state.user.accessToken;

export default userSlice.reducer;