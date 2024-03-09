import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export default store;
