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
  currentEmail: "",
  currentStack: "",
};

const emailSlice = createSlice({
  initialState: emailState,
  name: "Email",
  reducers: {
    getMails(state, action) {
      state.recieved = action.payload.recieved;
      state.sent = action.payload.sent;
    },
    setCurrentEmail(state, action) {
      state.currentEmail = action.payload;
    },
    setCurrentStack(state, action) {
      state.currentStack = action.payload;
    },
  },
});

export const emailSliceActions = emailSlice.actions;

// UI Slice -------------------------------------------------------------------------------------------

const uiState = {
  readMode: false,
};

const uiSlice = createSlice({
  initialState: uiState,
  name: "UI",
  reducers: {
    showReadMode(state) {
      state.readMode = true;
    },
    hideReadMode(state) {
      state.readMode = false;
    },
  },
});

export const uiSliceActions = uiSlice.actions;

// Store ----------------------------------------------------------------------------------------------

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    email: emailSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
