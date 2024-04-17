import axios from "axios";

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
export const apiGetVoucherAll = (accessToken: string | null) => axios({
    url: '/v1/voucher/all',
    method: 'get',
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})

export const apiCreateVoucher = (accessToken: string | null, data: CreateVoucherType) => axios({
    url: '/v1/voucher',
    method: 'post',
    headers: {
        Authorization: `Bearer ${accessToken}`
    },
    data: data,
})