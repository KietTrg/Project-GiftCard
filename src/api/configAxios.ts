import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import { RootState } from '../stores';



export default function configAxios() {
    
    // console.log('accessToken: ', accessTokenTest);
    
    axios.defaults.baseURL = 'https://dev-api.giftcards.vn/';
    // axios.defaults.baseURL = import.meta.env.REACT_APP_API_URL
    axios.defaults.headers["content-type"] = "application/json";
    // axios.defaults.timeout = 10000;
    const {accessToken} = useSelector((state: RootState)=>state.user)
    console.log('accessToken: ', accessToken);
    let data = accessToken
    // let localDataString = window.localStorage.getItem("persist:root/user")
    // console.log('localDataString: ', localDataString);
    // const localData = localDataString ? JSON.parse(localDataString) : null;
    // const accessToken = localData?.accessToken 
    axios.interceptors.request.use(
        async (config) => {
            
            if (data) {
                console.log('data: ', data);
                const decodedToken: any = jwtDecode(data);
                // console.log('decodedToken: ', decodedToken);
                const currentDate = new Date();
                if (decodedToken.exp * 1000 < currentDate.getTime()) {
                    localStorage.removeItem('accessToken')
                } else {
                    config.headers.Authorization = `Bearer ${data}`
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

