import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    const [product, setProduct] = useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`,{
            method: 'GET',
            headers: { 'authorization': `Bearer ${localStorage.getItem('jwtToken')}`}
        }).then(response => response.json())
        .then(data=> setProduct(data))
    },[id])
    return (
        
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default Purchase;