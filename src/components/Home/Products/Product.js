import React from 'react';

const Product = ({ product }) => {
    const {name, img, description, min,max, price} = product;
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">Tools</span>
                    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                </div>
                <p className="text-gray-100">{description}</p>
                <p className="text-gray-100 mt-4">{min} Pcs Minimum</p>
                <p className="text-gray-100 mt-2">{max} Pcs Maximum</p>
                <p className="text-gray-100 mt-2 font-semibold">Price : ${price}/pcs</p>
                <button type="button" className="flex mt-4 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Proceed</button>

            </div>
        </div>
    );
};

export default Product;