import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetAdminGeneral, apiGetAdminList } from "../../../api/admin";
interface AdminListInfo {
    _id: string;
    username: string;
    brandName: string;
    logo: string;
    isActive: boolean;
    address: string;
    description: string;
    roles: string[];
    finalizationPaid: number;
    finalizationAmount: number;
}
interface AdminList {
    data: AdminListInfo[]
}
interface AdminGeneral {
    total: number,
    quantity: number,
    deposit: number
}
export const getAdminList = createAsyncThunk<AdminList, string>(
    "admin/getAdminList",
    async (accessToken, { rejectWithValue }) => {
        const response = await apiGetAdminList(accessToken);
        if (response.status === 200) {
            return response.data as AdminList
        }
        return rejectWithValue(response)
    }
);
export const getAdminGeneral = createAsyncThunk<AdminGeneral, string>(
    "admin/getAdminGeneral",
    async (accessToken, { rejectWithValue }) => {
        const response = await apiGetAdminGeneral(accessToken);
        if (response.status === 200) {
            return response.data.data as AdminGeneral
        }
        return rejectWithValue(response)
    }
);

