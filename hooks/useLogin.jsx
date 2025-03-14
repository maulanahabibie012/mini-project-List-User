import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [inputData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const handleChange = (e) => {
        setFormData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    }

    const handleLogin = async () => {
        if (!inputData.email || !inputData.password) {
            setToast({
                type: 'error',
                message: 'Field tidak boleh kosong.'
            });
            return;
        }
        
        setLoading(true);
        try {
            const response = await axios.post('https://reqres.in/api/login', inputData);
            localStorage.setItem("access_token", response.data.token);
            setToast({
                type: 'success',
                message: 'Berhasil Login! Redirecting..'
            });
            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch {
            setToast({
                type: 'error',
                message: 'Email atau password salah.'
            });
        } finally {
            setLoading(false);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        console.log('logout toast');
        setToast({
            type: 'success',
            message: 'Berhasil Logout! Redirecting..'
        });
        setTimeout(() => {
            navigate('/login');
        }, 3000);
    };

    return { 
        inputData, 
        handleChange, 
        handleLogin, 
        handleLogout, 
        loading, 
        toast, 
        setToast 
    };
}

export default useLogin;