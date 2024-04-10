import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import { RootState } from '../stores';

// Add a request interceptor
export default function configAxios() {
    axios.defaults.baseURL = 'https://dev-api.giftcards.vn/'
    axios.defaults.headers["content-type"] = "application/json";
    axios.defaults.timeout = 10000;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { accessToken } = useSelector((state: RootState) => state.user)
    axios.interceptors.request.use(
        async (config) => {

            if (accessToken) {
                const decodedToken: any = jwtDecode(accessToken);
                const currentDate = new Date();
                if (decodedToken.exp * 1000 < currentDate.getTime()) {
                    localStorage.removeItem('accessToken')
                }
            }
            return config
        },
        (error) => {
            Promise.reject(error)
        },
    )

    axios.interceptors.response.use(
        (response) => {
            return response
        },
        // eslint-disable-next-line func-names
        async function (error) {
            if (!navigator.onLine) {
                return Promise.reject(error)
            }
            const originalRequest = error.config
            if (
                error &&
                error.response &&
                error?.response?.status === 401 &&
                !originalRequest._retry
            ) {
                originalRequest._retry = true
            }
            return Promise.reject(error)
        },
    )
}

