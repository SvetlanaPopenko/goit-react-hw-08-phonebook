import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { logIn, logOut, refreshUser, register } from './auth-operations';

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
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, state => {
        return state;
      })
      .addCase(refreshUser.rejected, state => {
        toast.error('Error!');
        return state;
      }),
});

export const authReducer = authSlice.reducer;
