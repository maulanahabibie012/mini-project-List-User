import axios from "axios";
import { useState, useEffect } from "react";
export default function ListUsers() {
    const [users, setUsers] = useState([]);

    const getData = () => {
        axios
        .get("https://reqres.in/api/users")
        .then((res) => {
            console.log("data berhasil", res);
            setUsers(res.data.data);
        })
        .catch((err) => {
            console.log("data error", err);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <h1>List User tailwind</h1>
            {users.map((user, index) => (
                <div className="flex flex-row" key={index}>
                    <img src={user.avatar} alt="" />
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    );
}