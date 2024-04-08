//node_modules
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetUser } from "../../api";
//components
//actions
//selector
//function
//constants
//styled


  

//   export const loginProvider = createAsyncThunk<
//     void,
//     string,
//     { rejectValue: string }
//   >(
//     "user/current",
//     async (accessToken, { rejectWithValue }) => {
//       try {
//         const response = await apiLoginProvider({ accessToken }); // Pass the accessToken as an object
//         console.log(response);
//         // Handle response data accordingly
//       } catch (error: any) {
//         return rejectWithValue(error.message);
//       }
//     }
//   );

export const getCurrent = createAsyncThunk<void>(
    "user/current",
    async (_, { rejectWithValue }) => {
      const response = await apiGetUser();
      console.log(response);
    //   if (!response.success) return rejectWithValue(response);
    //   return response.rs;
    }
  );
interface UserType {
    accessToken: string | null;
}
const init: UserType = {
    accessToken: null
}
export const userReducer = createSlice({
    name: 'user',
    initialState:init,
    reducers: {
        loginUser: (state, action) => {
            state.accessToken = action.payload.accessToken;
          },
        
    },
    
})
export const { loginUser } = userReducer.actions;
export default userReducer.reducer;