//node_modules
import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast'
import { useAppDispatch } from '../stores';
import { logout, setAccessToken, setRoles } from '../stores/reducers/user/user_slice';
import { apiGetUser, apiLogin } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { getProvider } from '../stores/reducers/user/user_actions';
import { useGobalSelector } from '../api/selector';
//components
//actions
//selector
//function
//constants
export const AuthContext = createContext<AppContext>({
    loginUser: async () => { },
    logoutUser: () => { },
    token: null,
    isAdmin: "",
    user: null
});
//styled
type AppContext = {
    loginUser: (data: { username: string; password: string }) => Promise<void>;
    logoutUser: () => void;
    token: string | null;
    isAdmin: string | undefined;
    user: UserInfo | null
}
interface UserInfo {
    address: string;
    brandName: string;
    description: string;
    finalizationPaid: number;
    isActive: boolean;
    logo: string;
    roles: string[];
    username: string;
    _id: string;
}
export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // -------------------------- VAR ---------------------------
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    // -------------------------- STATE -------------------------
    const [token, setToken] = useState<string | null>("")
    const [user, setUser] = useState<UserInfo | null>(null)
    const [isAdmin, setIsAdmin] = useState<string | undefined>("")
    // -------------------------- REDUX -------------------------
    const { accessToken, roles, userInfo } = useGobalSelector()
    // -------------------------- FUNCTION ----------------------
    const loginUser = async (data: { username: string; password: string }) => {
        try {
            const response = await apiLogin(data)
            if (response.data.data) {
                dispatch(setAccessToken(response.data.data.accessToken))
                const result = await apiGetUser(response.data.data.accessToken)
                if (result.data.data.roles[0] === 'admin') {
                    dispatch(getProvider(response.data.data.accessToken))
                    setIsAdmin(result.data.data.roles[0])
                    navigate('/admin')
                };
                if (result.data.data.roles[0] === 'provider') {
                    dispatch(getProvider(response.data.data.accessToken))
                    setIsAdmin(result.data.data.roles[0])
                    navigate('/')

                };

            }
        } catch (error) {
            toast.error('Tên dăng nhập hoặc mật khẩu không đúng')
            console.log('error: ', error);
        }
    }
    const logoutUser = () => {
        localStorage.removeItem("user")
        setToken('')
        setIsAdmin('')
        setUser(null)
        dispatch(logout({}))
        navigate('/login')
    }
    // -------------------------- EFFECT ------------------------
    useEffect(() => {
        setToken(accessToken)
    }, [accessToken])
    useEffect(() => {
        setRoles(roles)
        setIsAdmin(roles)
    }, [roles])
    useEffect(() => {
        setUser(userInfo)
    }, [userInfo])

    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------

    return (
        <AuthContext.Provider value={{ logoutUser, loginUser, token, isAdmin, user }}>
            {children}
        </AuthContext.Provider>
    );
};
