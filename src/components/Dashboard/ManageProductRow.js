import React from 'react';

const ManageProductRow = ({ product, handlebtn }) => {
    const { _id, name, max,  price, img } = product;
  
    return (
        <>
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                <td className="p-3">
                <img alt="" className="w-11 h-11 ml-4 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={img} />
                </td>

                <td className="p-3">
                    <p>{max} pcs</p>

                </td>
                <td className="p-3">
                    <p>{name}</p>

                </td>
                <td className="p-3 text-right">
                    <p>${Math.round(price)}</p>
                </td>
               
                <td className="p-3 flex text-right">
                <label for="manageProductModal" onClick={()=>handlebtn(product)} class="btn btn-xs bg-rose-500 hover:bg-rose-600">Delete</label>
                </td>
            </tr>
            
        </>
    );
};

export default ManageProductRow;