import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { logIn, logOut, refreshhUser, register } from './auth-operations';

const authExtraActions = [register, logIn, logOut, refreshhUser];
const getAuthActions = (action, type) =>
  authExtraActions.map(action => action[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('Welcome');
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success(`Hi, ${state.user.name}!`);
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        toast.success(`Bye!`);
      })
      .addCase(refreshhUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(...getAuthActions(authExtraActions, 'pending')),
        state => {
          toast.loading('Loading...');
          return state;
        }
      )
      .addMatcher(
        isAnyOf(...getAuthActions(authExtraActions, 'rejected')),
        state => {
          toast.error('Error!');
          return state;
        }
      ),
});

export const authReducer = authSlice.reducer;
