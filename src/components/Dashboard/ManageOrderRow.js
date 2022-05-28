import React from 'react';

const ManageOrderRow = ({ order }) => {
    const { _id, name, quantity, client, price } = order;
    const handleCancel = (id) => {
        const url = `https://blooming-woodland-85127.herokuapp.com/order/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: { 'authorization': `Bearer ${localStorage.getItem('jwtToken')}` }
        }).then(response => response.json())
            .then(data => console.log(data))

    }
    return (
        <>
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                <td className="p-3">
                    <p>{client}</p>
                </td>

                <td className="p-3">
                    <p>{quantity} pcs</p>

                </td>
                <td className="p-3">
                    <p>{name}</p>

                </td>
                <td className="p-3 text-right">
                    <p>${Math.round(price)}</p>
                </td>
                <td className="p-3 text-right">
                    <p><span className="btn  btn-xs">Pending</span></p>
                </td>
                <td className="p-3 flex text-right">
                    <button className="btn btn-xs mr-3 bg-violet-500 hover:bg-violet-600">Shipped</button>

                    <label for="order-Delete" class="btn btn-xs bg-rose-500 hover:bg-rose-600">Cancel</label>
                </td>
            </tr>
            <input type="checkbox" id="order-Delete" class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box relative bg-gray-900">
                    <label for="order-Delete" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-rose-500">Are you sure want to delete this order?</h3>
                    <p class="py-4">Its cant be undone!</p>
                    <button onClick={() => handleCancel(_id)} className="btn bg-rose-500"><label htmlFor="order-Delete">Delete</label></button>
                </div>
            </div>
        </>
    );
};

export default ManageOrderRow;