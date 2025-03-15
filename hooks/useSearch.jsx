// import { useState } from "react";
// import useUser from './useUser';

// const useSearch = () => {
//     const [search, setSearch] = useState('');
//     const { users } = useUser();

//     const filteredUsers = users.filter(user =>
//         user.first_name.toLowerCase().includes(search.toLowerCase()) ||
//         user.last_name.toLowerCase().includes(search.toLowerCase()) ||
//         user.email.toLowerCase().includes(search.toLowerCase())
//     );

//     return { search, setSearch, filteredUsers };
// };

// export default useSearch;