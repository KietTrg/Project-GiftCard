//node_modules
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetUser } from "../../api";
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

export const getCurrent = createAsyncThunk<UserInfo | null>(
  "user/current",
  async (accessToken, { rejectWithValue }) => {
    const response = await apiGetUser(accessToken);
    console.log('response: ', response.data);
    if (response.statusCode === 200) {
      return response.data as UserInfo
    }
    return rejectWithValue(response)
  }
);
interface UserType {
  accessToken: string | null;
  isLogin: boolean;
  userInfo: UserInfo | null;
}
const init: UserType = {
  accessToken: null,
  isLogin: false,
  userInfo: null,
}
export const userReducer = createSlice({
  name: 'user',
  initialState: init,
  reducers: {
    loginUser: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isLogin = action.payload.isLogin
    },
    logoutUser: (state, _) => {
      state.accessToken = null;
      state.isLogin = false;
      state.userInfo = null;
    }
  },
  extraReducers: (builder) => {

    builder.addCase(getCurrent.fulfilled, (state, action) => {

      state.userInfo = action.payload;
      state.isLogin = true;
    });
    builder.addCase(getCurrent.rejected, (state, _) => {
      state.userInfo = null;
      state.isLogin = false;
      state.accessToken = null;

    });
  },
})
export const { loginUser, logoutUser } = userReducer.actions;
export default userReducer.reducer;