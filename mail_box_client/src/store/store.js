import { configureStore, createSlice } from "@reduxjs/toolkit";

const authState = {
  token: "",
};

const authSlice = createSlice({
  initialState: authState,
  name: "Auth",
  reducers: {
    login(state, action) {
      state.token = action.payload;
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
