//node_modules
import { createSlice } from "@reduxjs/toolkit";
import { getProvider } from "./user_actions";
//components
//actions
//selector
//function
//constants
//styled

interface UserInfo {
  address: string;
  brandName: string;
  description: string;
  finalizationPaid: number;
  isActive: boolean;
  logo: string;
  roles: string[];
  username: string;
  _id: string;
}

interface UserType {
  accessToken: string | null;
  userInfo: UserInfo | null;
  roles: string | undefined
}
const initialState: UserType = {
  accessToken: null,
  userInfo: null,
  roles: ""
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
    setRoles: (state, actions) => {
      state.roles = actions.payload
    },
    logout: (state, _) => {
      state.accessToken = null
      state.userInfo = null
      state.roles = ""

    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProvider.fulfilled, (state, actions) => {
      state.userInfo = actions.payload
      state.roles = actions.payload?.roles[0]
    })
  },
})
const { actions } = userSlice
export const { setAccessToken, setRoles, logout } = actions;
export default userSlice.reducer;