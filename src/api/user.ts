import axios from "axios";
import apis from "./configAxios";

export const apiUserLogin = async (data: {
    username: string,
    password: string
}) => (await apis.post('v1/auth-admin/login', data)).data

// export const apiUserLogout = async () => {
//     (await axios.post('v1/auth-admin/logout')).data
// }

export const apiGetUser = async () => (
    await apis.get('v1/provider')
)


