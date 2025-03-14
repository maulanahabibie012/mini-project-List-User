import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useUser = () => {
    const [users, setUsers] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 6
    });
    const [totalPages, setTotalPages] = useState(1);

    const getData = useCallback (async () => {
        try {
            const res = await axios.get('https://reqres.in/api/users', {
                params: pagination
            });
            setUsers(res.data.data);
            setTotalPages(res.data.total_pages); 
        } catch (err) {
            console.log(err);
        }
    }, [pagination]);

    const handleNextPage = () => {
        setPagination((prev) => ({
            ...prev,
            page: prev.page + 1
        }));
    };

    const handlePrevPage = () => {
        setPagination((prev) => ({
            ...prev,
            page: prev.page > 1 ? prev.page - 1 : 1
        }));
    };

    useEffect(() => {
        getData();
    }, [getData, pagination]);

    return { users, pagination, totalPages, getData, handleNextPage, handlePrevPage };
};

export default useUser;