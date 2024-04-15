import { createSlice } from "@reduxjs/toolkit";
import { getAdminDeposit, getAdminGeneral, getAdminList } from "./admin_actions";

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
interface adminGeneralType {
    total: number,
    quantity: number,
    deposit: number
}
interface DepositType {
    _id: string;
    date: Date;
    amount: number;
}

interface adminListType {
    dataList: AdminListInfo[] | null,
    dataGeneral: adminGeneralType,
    dataDeposit: DepositType[]
}

const initialState: adminListType = {
    dataList: [],
    dataGeneral: {
        total: 0,
        quantity: 0,
        deposit: 0
    },
    dataDeposit: []
}
export const adminList = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAdminList.fulfilled, (state, action) => {
            state.dataList = action.payload.data
        })
        builder.addCase(getAdminGeneral.fulfilled, (state, actions) => {
            state.dataGeneral = actions.payload
        })
        builder.addCase(getAdminDeposit.fulfilled, (state, actions) => {
            state.dataDeposit = actions.payload.data
        })
    }
})
const { actions } = adminList
export const { } = actions;
export default adminList.reducer;