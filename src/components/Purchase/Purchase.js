import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Loading from '../shared/Loading/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [client, setClient] = useState(false)
    const [product, setProduct] = useState({});
    const [totalPrice, setTotalPrice] = useState(1);
    const [user, loading,] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'GET',
            headers: { 'authorization': `Bearer ${localStorage.getItem('jwtToken')}` }
        }).then(response => response.json())
            .then(data => setProduct(data))
    }, [id]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    if (loading) {
        return <Loading></Loading>
    }
    const onSubmit = (data) => {
        const quantity = data.quantity;
        setTotalPrice(product?.price * quantity);
        const order = { name: product?.name, quantity: quantity, price: product?.price * quantity, client: user?.displayName, clientEmail: user?.email }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    }
    const min = product?.min;
    const max = product?.max;
    return (

        <div>
            <section className="p-6 bg-gray-800 text-gray-100">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <img src={product?.img} alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
                        <span className="block mb-2 text-violet-400">Tools Details</span>
                        <h1 className="text-5xl font-extrabold text-gray-50">{product?.name}</h1>
                        <p className="my-8">
                            {product?.description}
                        </p>
                        <p className="text-left my-2">
                            price per pcs : <span className="font-semibold">{product?.price}$</span>
                        </p>
                        <p className="text-left my-2 ">
                            In Stock : <span className="font-semibold">{product?.max} pcs</span>
                        </p>
                        <p className="text-left my-2 ">
                            Minimum Order :  <span className="font-semibold">{product?.min} pcs</span>
                        </p>
                        <form className="grid gap-5 " onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid">
                                <label className="text-left font-semibold mb-2" htmlFor="quantity">Quantity</label>
                                <input name='quantity' className="w-8/12 p-4 bg-gray-500 text-gray-100 rounded h-9" placeholder="Quantity"  {...register("quantity", { required: true, min: min, max: max })} />
                            </div>
                            <div className="grid">
                                <label className="text-left font-semibold mb-2" htmlFor="quantity">Price</label>
                                <input className="w-8/12 p-4 rounded h-9" disabled Value={totalPrice} placeholder="Price" {...register("price")} />
                            </div>
                            {
                                errors?.quantity?.type === 'max' && <p className="text-left text-rose-600">you can not order more then in stoke quantity</p>
                            }
                            {
                                errors?.quantity?.type === 'min' && <p className="text-left text-rose-600 mt-3">you must be set order quantity more then minimum order quantity</p>
                            }
                            <input className='btn w-8/12' type="submit" value='Confirm Order' />

                        </form>
                        <div className="text-left mt-4">
                            <button onClick={() => setClient(!client)} className="btn bg-violet-400 hover:bg-violet-500">Client Information</button>
                            {
                                client && <div className=""><h2 className="mt-2">Client Name: {user?.displayName}</h2>
                                    <h2>Client Email: {user?.email}</h2></div>
                            }
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Purchase;