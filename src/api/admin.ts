import axios from "axios";

export const apiGetAdminList = (accessToken: string | null) => axios({
    url: '/v1/provider/all',
    method: "get",
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})
export const apiGetAdminGeneral = (accessToken: string | null) => axios({
    url: '/v1/orders/statictis',
    method: "get",
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})
export const apiGetAdminDeposit = (accessToken: string | null) => axios({
    url: '/v1/urbox-deposit',
    method: "get",
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})

export const apiGetAdminOrderList = (accessToken: string | null, params: {
    skip: number | null,
    limit: number | null,
    fromDate: string | null,
    toDate: string | null,
    search: string | null
}) => axios({
    url: '/v1/orders/admin/list',
    method: 'get',
    params: {
        skip: params.skip,
        limit: params.limit,
        fromDate: params.fromDate,
        toDate: params.toDate,
        search: params.search
    },
    headers: {
        Authorization: `Bearer ${accessToken}`
    },
})