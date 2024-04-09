import axios from "axios";

export const apiUserLogin = async (data: {
    username: string,
    password: string
}) => (await axios.post('v1/auth-admin/login', data)).data

export const apiUserLogout = async () => {
    await axios.post('v1/auth-admin/logout')
}

export const apiGetUser = async () => (
    await axios.get('v1/provider')
)


