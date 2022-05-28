import React from 'react';

const MakeAdminRow = ({ user, id }) => {
    const {_id, name, email, role} = user;
    const handleAdmin = (id) => {
        
        const url = `https://blooming-woodland-85127.herokuapp.com/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: { 
                'authorization': `Bearer ${localStorage.getItem('jwtToken')}` }
        }).then(response => response.json())
            .then(data => console.log(data))

    }
    return (
       
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                <td className="p-3">
                    <p>{name}</p>
                </td>

                <td className="p-3">
                    <p>{email} </p>

                </td>
                <td className="p-3 text-right">
                    
                    {
                        role === 'admin' && <p className="btn btn-xs">already admin</p>
                    }

                </td>
               
                
                <td className="p-3 flex text-right">
                    

                   {role !== 'admin' ?  <label onClick={() => handleAdmin(id)} for="order-Delete" class="btn btn-xs bg-violet-500 hover:bg-violet-600">Make Admin</label> : ''}
                </td>
            </tr>
            
        
    );
};

export default MakeAdminRow;