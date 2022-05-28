import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import useDuser from '../../hooks/useDuser';
import Loading from '../shared/Loading/Loading';

const AddProduct = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => { 
        e.preventDefault()
        const name = e.target.name.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const min = e.target.min.value;
        const max = e.target.max.value;
        const product = {name, img, description, price, min, max};
        fetch('https://blooming-woodland-85127.herokuapp.com/',{
            method: 'POST',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        }).then(response => response.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('You have successfully added a new product')
                navigate('/')
            }else{
                toast.error('Something went wrong! Please try again later')
            }
        })
    }
    return (
        <div>
            <section className="py-6 bg-gray-800 mt-20 text-gray-100">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 grid items-center md:py-0 md:px-6">
                        <div className="">
                        <h3 className="text-4xl mb-10 font-semibold">Add a new  <span className="text-violet-400">Product</span></h3>
                        

                        </div>

                    </div>
                    <form novalidate="" onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <h3 className="text-4xl font-semibold">Update You'r  <span className="text-violet-400">Profile</span></h3>
                        <label className="block">
                            <span className="mb-1">Product Name</span>
                            <input name='name' type="text"  className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Description</span>
                            <textarea name='description' type="text"  className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Price</span>
                            <input name='price' type="number"  className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Minimum Order Quantity</span>
                            <input name='min' type="number"  className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Available Stock</span>
                            <input name='max' type="number"  className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Img URL</span>
                            <input name='img' type="url" className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                       <input type="submit" value='Add a new Product' className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddProduct;