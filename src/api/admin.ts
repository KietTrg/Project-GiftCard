import axios from "axios";

export const apiGetAdminList = (accessToken: string | null) => axios({
    url: '/v1/provider/all',
    method: "get",
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})