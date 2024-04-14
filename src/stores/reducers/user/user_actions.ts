import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetUser } from "../../../api/auth";
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
export const getProvider = createAsyncThunk<UserInfo | null, string>(
    "user/getProvider",
    async (accessToken, { rejectWithValue }) => {
        const response = await apiGetUser(accessToken);
        if (response.status === 200) {
            return response.data.data as UserInfo
        }
        return rejectWithValue(response)
    }
);

