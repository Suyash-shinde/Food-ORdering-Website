'use client'
import React, { useState } from 'react';

const Kitchen = () => {
  const [orderItems, setOrderItems] = useState([
    { id: 1, table_number: 1, dish: 'Tomato Soup', modifications: 'None', quantity: '2' },
    { id: 2, table_number: 3, dish: 'Panner Tikka', modifications: 'Less Spicy', quantity: '2' },
    { id: 3, table_number: 14, dish: 'Naan', modifications: 'None', quantity: '5' },
    { id: 4, table_number: 13, dish: 'Lassi', modifications: 'None', quantity: '1' },  
     { id: 5, table_number: 8, dish: 'Vada Pav', modifications: 'None', quantity: '2' },
    { id: 6, table_number: 9, dish: 'Tomato Soup', modifications: 'yes', quantity: '2' },
  ]); 

  const handleDelete = (id) => {
    const updatedItems = orderItems.filter((item) => item.id !== id);
    setOrderItems(updatedItems);
  };

  return (

    <table className="min-w-full border-collapse block md:table" >
      <thead className="block md:table-header-group">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Table_Number
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Dish
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Modifications
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Quantity
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Actions
          </th>
        </tr>
      </thead>
      <tbody  className="block md:table-row-group">
        {orderItems.map((item) => (
          <tr key={item.id} className="bg-white shadow rounded-lg p-4">
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{item.table_number}</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{item.dish}</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">none</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{item.quantity}</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Kitchen;
