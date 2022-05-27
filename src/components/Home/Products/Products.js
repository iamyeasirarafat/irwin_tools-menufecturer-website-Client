import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const Products = () => {
  const {data:products, isLoading} = useQuery('products', () => fetch('products.json').then(res => res.json()))
    if(isLoading){
        return <p>loading...</p>
    }
    return (
        <div className="bg-gray-800 text-gray-100">
            <div className="w-10/12 mx-auto">
            <span className="block  text-center text-violet-400">Our Products</span>
            <h2 className="text-center text-5xl font-semibold pb-4">Tools/Parts{products.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-7">
                {
                    products.map(product =><Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
        </div>
    );
};

export default Products;