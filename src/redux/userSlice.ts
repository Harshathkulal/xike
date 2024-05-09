import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";

interface UserInfo {
    // Define your user info properties here
  }

  interface UserState {
    userInfo: UserInfo | null;
  }


// Load user info from local storage if available
export const loadUserInfoFromStorage = () => {
    return (dispatch: Dispatch) => {
      const storedUserInfo = localStorage.getItem("userInfo");
      const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
  
      if (userInfo) {
        dispatch(addUser(userInfo));
      }
    };
  };


const userSlice = createSlice({
    name: "user",
    initialState: {
      userInfo: null,
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
