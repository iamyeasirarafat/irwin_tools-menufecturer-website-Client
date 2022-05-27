import React from 'react';

const OrderSummaryRow = ({order}) => {
    const {name, quantity,client, price}=order
    return (
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
					<td className="p-3 flex text-right">
						<button className="btn btn-xs mr-3 bg-violet-500">pay</button>
						<button className="btn btn-xs bg-rose-500">Cancel</button>
					</td>
				</tr>
    );
};

export default OrderSummaryRow;