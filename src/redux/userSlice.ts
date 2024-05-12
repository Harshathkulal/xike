import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  // Define your user info properties here
}

interface UserState {
  userInfo: UserInfo | null;
}

// Load user info from local storage
const persistedUserInfo = localStorage.getItem("userInfo");
const initialUserInfo = persistedUserInfo
  ? JSON.parse(persistedUserInfo)
  : null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: initialUserInfo,
  } as UserState,
  reducers: {
    addUser: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
