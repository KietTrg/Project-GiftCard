import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


export default function configAxios() {
    
    axios.defaults.baseURL = 'https://dev-api.giftcards.vn/';
    // axios.defaults.baseURL = import.meta.env.REACT_APP_API_URL
    axios.defaults.headers["content-type"] = "application/json";
    // axios.defaults.timeout = 10000;
    let localDataString = window.localStorage.getItem("persist:root/user")
    console.log('localDataString: ', localDataString);
    const localData = localDataString ? JSON.parse(localDataString) : null;
    const accessToken = localData?.accessToken 
    axios.interceptors.request.use(
        async (config) => {
            
            if (accessToken) {
                console.log('accessToken: ', accessToken);
                const decodedToken: any = jwtDecode(accessToken);
                // console.log('decodedToken: ', decodedToken);
                const currentDate = new Date();
                if (decodedToken.exp * 1000 < currentDate.getTime()) {
                    localStorage.removeItem('accessToken')
                } else {
                    config.headers.Authorization = `Bearer ${accessToken}`
                    console.log('Authorization: ', config.headers.Authorization);
                }
            }
            return config
        },
        (error) => {
            Promise.reject(error)
        },
    )

    
}

