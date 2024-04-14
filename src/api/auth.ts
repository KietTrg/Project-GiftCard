import axios from "axios";

export const apiLogin = (data: {
    username: string,
    password: string,
}) => axios({
    url: '/v1/auth-admin/login',
    method: 'post',
    data
});
export const apiGetUser = (accessToken: string | null) => axios({
    url: '/v1/provider',
    method: 'get',
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
});

