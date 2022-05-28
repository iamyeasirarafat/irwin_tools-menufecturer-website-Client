import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('https://blooming-woodland-85127.herokuapp.com/').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="bg-gray-800 text-gray-100">
            <div className="w-10/12 mx-auto">
                <span className="block  text-center text-violet-400">Our Products</span>
                <h2 className="text-center text-5xl font-semibold mb-8 ">Tools/Parts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-7">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;