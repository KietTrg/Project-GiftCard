import { createSlice } from "@reduxjs/toolkit";
import { getAdminList } from "./admin_actions";

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

interface adminListType {
    dataList: AdminListInfo[] | null
}

const initialState: adminListType = {
    dataList: []
}
export const adminList = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAdminList.fulfilled, (state, action) => {
            state.dataList = action.payload.data
        })
    }
})
const { actions } = adminList
export const { } = actions;
export default adminList.reducer;