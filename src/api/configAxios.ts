import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores';
import { logoutUser } from '../stores/reducers/user_reducer';



export default function configAxios() {

    const dispatch = useDispatch()





    // console.log('accessToken: ', accessTokenTest);

    axios.defaults.baseURL = 'https://dev-api.giftcards.vn/';
    // axios.defaults.baseURL = import.meta.env.REACT_APP_API_URL
    axios.defaults.headers["content-type"] = "application/json";
    // axios.defaults.timeout = 10000;
    const { accessToken } = useSelector((state: RootState) => state.user)
    console.log('accessToken trong redux: ', accessToken);
    let data = accessToken
    console.log('data = accessToken: ', data);
    // let localDataString = window.localStorage.getItem("persist:root/user")
    // console.log('localDataString: ', localDataString);
    // const localData = localDataString ? JSON.parse(localDataString) : null;
    // const accessToken = localData?.accessToken 
    axios.interceptors.request.use(
        async (config) => {
            const localData = window.localStorage.getItem('persist:root/user')
            const jsonData = localData ? JSON.parse(localData) : null
            const accessToken = jsonData?.accessToken
            console.log('localData: ', localData);
            console.log('jsonData: ', jsonData);
            console.log('access: ', accessToken);
            if (accessToken) {
                const decodedToken: any = jwtDecode(accessToken);
                // console.log('decodedToken: ', decodedToken);
                const currentDate = new Date();
                if (decodedToken.exp * 1000 < currentDate.getTime()) {
                    localStorage.removeItem('accessToken')
                    dispatch(logoutUser({}))
                } else {
                    config.headers.Authorization = `Bearer ${accessToken}`
                    console.log('data them vao header: ', accessToken);
                }
            }
            return config
        },
        (error) => {
            Promise.reject(error)
        },
    )


}

