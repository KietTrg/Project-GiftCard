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