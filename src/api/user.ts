import axios from "axios";

export const apiUserLogin = async (data: {
    username: string,
    password: string
}) => (await axios.post('v1/auth-admin/login', data)).data

// export const apiUserLogout = async () => {
//     (await axios.post('v1/auth-admin/logout')).data
// }

export const apiGetUser = async (token: string | null) => {
    try {
        const response = await axios.get('v1/provider', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error for handling elsewhere
    }
};

