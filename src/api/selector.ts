import { useSelector } from 'react-redux';
import { RootState } from '../stores';

export const useGobalSelector = () => {
    const data = useSelector((state: RootState) => state.user)
    return data
}
