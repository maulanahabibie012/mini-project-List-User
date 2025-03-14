import { useState } from "react";
import useUser from './useUser';

const useSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { users } = useUser();

    const filteredUsers = users.filter(user =>
        user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return { searchQuery, setSearchQuery, filteredUsers };
};

export default useSearch;