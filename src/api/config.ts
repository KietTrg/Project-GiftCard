import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useGobalSelector } from './selector';
import { useAuth } from '../context/authContext';

export default function configAxios() {
    axios.defaults.baseURL = 'https://dev-api.giftcards.vn'
    axios.defaults.headers["content-type"] = "application/json";
    axios.defaults.timeout = 10000;


    const { accessToken } = useGobalSelector();
    const { logoutUser } = useAuth()
    axios.interceptors.request.use(
        async (config) => {
            if (accessToken) {
                const decodedToken: any = jwtDecode(accessToken);
                const currentDate = new Date();
                if (decodedToken.exp * 1000 < currentDate.getTime()) {
                    localStorage.removeItem('accessToken');
                    logoutUser()
                }
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        async function (error) {
            if (!navigator.onLine) {
                return Promise.reject(error);
            }
            const originalRequest = error.config;
            if (error && error.response && error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
            }
            return Promise.reject(error);
        }
    );
}
