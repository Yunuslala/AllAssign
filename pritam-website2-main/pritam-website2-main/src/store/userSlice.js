import { createSlice } from "@reduxjs/toolkit";
// Check if user data exists in local storage
const userData = localStorage.getItem("userData");
const parseData = JSON.parse(userData);
const initialState = {
  isLoggedIn: userData ? true : false,
  userData: userData ? parseData : null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login: (state, action) => {
      const jsondata = JSON.stringify(action.payload);
      localStorage.setItem("userData", jsondata);
      state.isLoggedIn = true;
    },
    LogOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { Login, LogOut } = userSlice.actions;
export default userSlice.reducer;
