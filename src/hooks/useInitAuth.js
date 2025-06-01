
import { useState } from "react"
import toast from "react-hot-toast"
import useUser from "../store/useUser"
const useInitAuth = () => {
    const { user, setUser } = useUser();
    const { setIsLoading } = useLoading();
    
    useEffect(() => {
        const initAuth = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
            setUser({ token });
            }
        } catch (error) {
            console.error('Error initializing auth:', error);
        } finally {
            setIsLoading(false);
        }
        };
    
        initAuth();
    }, []);
    
    return null;
}