import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Main = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then ( data => setUsers(data))
    },[])
    return (
        <div>
            <h1>Number of users is {users.length}</h1>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }

        </div>
    );
};

export default Main;