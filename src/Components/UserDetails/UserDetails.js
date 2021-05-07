import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
    const {id} = useParams();
    const [userDetails, setUserDetails] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then (res => res.json())
        .then (data => setUserDetails(data))
    })
     
    const {name, email, phone, website , address} = userDetails
    const detailStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '10px 10px 5px dimgrey'
    }
    
 
    return (
        
        <div style={detailStyle}>
            <h1>This is details of id {id}</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            {/* <h3> <u>Detail Address:-</u>  </h3>
            <p>Street: {address.street}</p>
            <p>Suite: {address.suite}</p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p> */}
        </div>
    );
};

export default UserDetails;