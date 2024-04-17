import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCreateVoucher, apiGetVoucherAll } from "../../../api/provider";

interface VoucherType {
    _id: string;
    name: string;
    amount: number;
    remainQuantity: number;
    description: string;
    addresses: string[];
    price: number;
    promoPrice: number;
    value: number;
    expireDate: string;
    provider: string;
    vouchers: any[];
}
interface CreateVoucherType {
    name: string,
    amount: number,
    description: string,
    addresses: string[],
    price: number,
    promoPrice: number,
    value: number,
    expireDate: string
}
interface VoucherList {
    data: VoucherType[]
}


export const getVoucherAll = createAsyncThunk<VoucherList, string>(
    "provider/getVoucherAll",
    async (accessToken, { rejectWithValue }) => {
        const response = await apiGetVoucherAll(accessToken);
        if (response.status === 200) {
            return response.data as VoucherList
        }
        return rejectWithValue(response)
    }
);

export const createVoucher = createAsyncThunk<CreateVoucherType, { accessToken: string | null, data: CreateVoucherType }>(
    "provider/createVoucher",
    async ({ accessToken, data }, { rejectWithValue }) => {
        const response = await apiCreateVoucher(accessToken, data);
        console.log('response: ', response);
        if (response.status === 201) {
            return response.data
        }
        return rejectWithValue(response)
    }
)