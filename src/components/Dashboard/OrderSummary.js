import React, { useEffect, useState } from 'react';
import OrderSummaryRow from './OrderSummaryRow';

const OrderSummary = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders`, {
            method: 'GET',
            headers: { 'authorization': `Bearer ${localStorage.getItem('jwtToken')}` }
        }).then(response => response.json())
            .then(data => setOrders(data))
    }, [orders]);
  
    return (
        <div className="text-gray-100">
            <h3 className="text-4xl my-14 font-semibold">Your Order <span className="text-violet-400">Summary</span></h3>
            <div className="">
                <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Client</th>

                                    <th className="p-3">Quantity</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3 text-right">Amount</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <OrderSummaryRow key={order._id} order={order}></OrderSummaryRow>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
           
        </div >
    );
};

export default OrderSummary;