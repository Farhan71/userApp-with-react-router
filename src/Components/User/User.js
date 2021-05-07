import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const User = (props) => {
    // const [user, setUser]= useState({})
    // useEffect(() => {
    //         setUser(props.user)
    // },[])
    const {id, name, email} = props.user
    const history = useHistory();


    const handleDetails = (userId) => {
        const url = `/details/${userId}`
        history.push (url)
        // console.log(userId)
    }
    const userStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '10px 10px 5px dimgrey'

    }
    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <p>{email}</p>
            <p> <Link to={`/details/${id}`}> <button>Click here for details</button></Link> </p>
            <button onClick={() => handleDetails(id)}>Click here for details</button>
        </div>
    );
};

export default User;