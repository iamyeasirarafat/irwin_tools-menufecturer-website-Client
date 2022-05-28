import React from 'react';
import toast from 'react-hot-toast';

const ManageProductModal = ({product}) => {
    const {_id, name} = product;
    const handleCancel = () => {
        const url = `https://blooming-woodland-85127.herokuapp.com/product/${_id}`
        fetch(url, {
            method: 'DELETE',
            headers: { 'authorization': `Bearer ${localStorage.getItem('jwtToken')}` }
        }).then(response => response.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('you have successfully Deleted')
                }
                else{
                    toast.error('something went wrong!')
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="manageProductModal" class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box relative bg-gray-900">
                    <label for="manageProductModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-rose-500">Are you sure want to delete this Product?</h3>
                    <h3 class="text-lg font-bold text-rose-500">{name}</h3>
                    <p class="py-4">Its cant be undone!</p>
                    <button onClick={handleCancel} className="btn bg-rose-500"><label htmlFor="manageProductModal">Delete</label></button>
                </div>
            </div>
        </div>
    );
};

export default ManageProductModal;