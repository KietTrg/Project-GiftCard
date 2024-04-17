import { createSlice } from "@reduxjs/toolkit";
import { createVoucher, getVoucherAll } from "./provider_actions";

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



interface providerListType {
    dataVoucher: VoucherType[],
    successMessage: string,

}

const initialState: providerListType = {
    dataVoucher: [],
    successMessage: ""

}
export const providerList = createSlice({
    name: 'provider',
    initialState,
    reducers: {
        messageClear(state) {
            state.successMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getVoucherAll.fulfilled, (state, action) => {
            state.dataVoucher = action.payload.data
        })
        builder.addCase(createVoucher.fulfilled, (state, _) => {
            state.successMessage = "Create success"
        })
    }
})
const { actions } = providerList
export const { messageClear } = actions;
export default providerList.reducer;