import axios, { AxiosRequestConfig } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores';
import { getCurrent, logoutUser } from '../stores/reducers/user_reducer';
import { useEffect } from 'react';



const apis = axios.create({
    baseURL: 'https://dev-api.giftcards.vn/',

});

apis.interceptors.request.use(
    function (config) {

        let localStorageData = window.localStorage.getItem('persist:root/user')
        console.log('localStorageData: ', localStorageData);
        // Modify config if needed with the access token
        // config.headers.Authorization = `Bearer ${accessToken}`;
        if (localStorageData && typeof localStorageData === "string") {
            localStorageData = JSON.parse(localStorageData);
            console.log('localStorageData: ', localStorageData);

            return config;
        } else return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
export default apis
// export default function configAxios() {
//     axios.defaults.baseURL = 'https://dev-api.giftcards.vn/'
//     axios.defaults.timeout = 10000;
//     const { accessToken } = useSelector((state: RootState) => state.user)
//     console.log('accessToken: ', accessToken);
//     axios.interceptors.request.use(
//         function (config) {
//             console.log('accessToken trong config: ', accessToken);
//             // Do something before request is sent


//             return config
//         },
//         function (error) {
//             // Do something with request error
//             return Promise.reject(error);
//         }
//     )

// }

