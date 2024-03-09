import { configureStore, createSlice } from "@reduxjs/toolkit";

// Auth Slice---------------------------------------------------------------------------

const authState = {
  token: "",
  email: "",
};

const authSlice = createSlice({
  initialState: authState,
  name: "Auth",
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    logout(state) {
      state.token = "";
    },
  },
});

export const authSliceActions = authSlice.actions;

// emails Slice -----------------------------------------------------------------------------------

const emailState = {
  recieved: [],
  sent: [],
};

const emailSlice = createSlice({
  initialState: emailState,
  name: "Email",
  reducers: {
    getMails(state, action) {
      state.recieved = action.payload.recieved;
      state.sent = action.payload.sent;
    },
  },
});

export const emailSliceActions = emailSlice.actions;

// Store ----------------------------------------------------------------------------------------------

const store = configureStore({
  reducer: { auth: authSlice.reducer, email: emailSlice.reducer },
});

export default store;
