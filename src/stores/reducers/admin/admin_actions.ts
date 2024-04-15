import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetAdminDeposit, apiGetAdminGeneral, apiGetAdminList, apiGetAdminOrderList } from "../../../api/admin";
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


interface AdminList {
    data: AdminListInfoType[]
}
interface AdminGeneral {
    total: number,
    quantity: number,
    deposit: number
}
interface AdminDeposit {
    data: DepositType[]
}
interface AdminOrderList {
    data: {
        orders: AdminOrderListType[],
        total: number
    }
}
interface GetAdminOrderListParams {
    accessToken: string;
    params: {
        skip: number | null,
        limit: number | null,
        fromDate: string | null,
        toDate: string | null,
        search: string | null
    }
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

export const getAdminDeposit = createAsyncThunk<AdminDeposit, string>(
    "admin/getAdminDeposit",
    async (accessToken, { rejectWithValue }) => {
        const response = await apiGetAdminDeposit(accessToken);
        if (response.status === 200) {
            return response.data as AdminDeposit
        }
        return rejectWithValue(response)
    }
);

export const getAdminOrderList = createAsyncThunk<AdminOrderList, GetAdminOrderListParams>(
    "admin/getAdminOrderList",
    async ({ accessToken, params }, { rejectWithValue }) => {
        console.log('param: ', params);
        const response = await apiGetAdminOrderList(accessToken, params);
        console.log('response: ', response);
        if (response.status === 200) {
            return response.data as AdminOrderList
        }
        return rejectWithValue(response)
    }
);

