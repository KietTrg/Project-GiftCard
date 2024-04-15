import { createSlice } from "@reduxjs/toolkit";
import { getAdminDeposit, getAdminGeneral, getAdminList, getAdminOrderList } from "./admin_actions";

interface AdminListInfoType {
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
interface AdminOrderListType {
    brandName: string;
    chainId: string;
    condition: string;
    createdAt: string;
    deliveryMethod: string;
    email: string;
    imgUrl: string;
    isDelivery: boolean;
    isNeedVerify: boolean;
    itemId: string;
    itemName: string;
    offices: string[];
    orderId: string;
    paymentStatus: string;
    phoneNo: string;
    quantity: number;
    status: string;
    totalAmount: number;
    totalAmountPaid: number;
    transactionHash: string;
    unitPrice: number;
    updatedAt: string;
    userId: string;
    __v: number;
    _id: string;
}
interface adminListType {
    dataList: AdminListInfoType[] | null,
    dataGeneral: adminGeneralType,
    dataDeposit: DepositType[],
    dataOrderList: {
        order: AdminOrderListType[],
        total: number
    }
}

const initialState: adminListType = {
    dataList: [],
    dataGeneral: {
        total: 0,
        quantity: 0,
        deposit: 0
    },
    dataDeposit: [],
    dataOrderList: {
        order: [],
        total: 0
    }
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
        builder.addCase(getAdminOrderList.fulfilled, (state, actions) => {
            state.dataOrderList.order = actions.payload.data.orders
            state.dataOrderList.total = actions.payload.data.total
        })
    }
})
const { actions } = adminList
export const { } = actions;
export default adminList.reducer;