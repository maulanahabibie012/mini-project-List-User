import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
    const [dataRegister, setDataRegister] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setDataRegister({
            ...dataRegister,
            [e.target.name]: e.target.value,
        });
    }

    const handleRegister = async () => {
        if (!dataRegister.email || !dataRegister.password || !dataRegister.confirmPassword) {
            setToast({
                type: 'error',
                message: 'Field tidak boleh kosong.'
            });
            return;
        }
        if (dataRegister.password !== dataRegister.confirmPassword) {
            setToast({
                type: 'error',
                message: 'Password dan Confirm Password harus sama.'
            });
            return;
        }

        setLoading(true);
        try {
            await axios.post('https://reqres.in/api/register', dataRegister);
            setToast({
                type: 'success',
                message: 'Berhasil Register! Silahkan login..'
            });
            setTimeout(() => {
                navigate('/login');
            }, 500);
            // Error case
        } catch (error) {
            setToast({
                type: 'error',
                message: (error.response && error.response.data.error) || 'Terjadi kesalahan..'
            });
        } finally {
            setLoading(false);
        }
    }


    return { dataRegister, handleChange, handleRegister, loading, toast, setToast };
}

export default useRegister;