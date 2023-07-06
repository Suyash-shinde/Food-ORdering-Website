'use client'
import React, { useState,useEffect  } from 'react';

const Kitchen = ({ cartItems }) => {
  const [orderItems, setOrderItems] = useState([]);

  const handleDelete = (id) => {
    setOrderItems((prevOrderItems) => {
      const updatedItems = prevOrderItems.filter((item) => item.id !== id);
      localStorage.setItem('KitchenItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  useEffect(() => {
    if (orderItems && orderItems.length > 0){
      localStorage.setItem('KitchenItems', JSON.stringify(orderItems));
    }
  }, [orderItems]);
  
  useEffect(() => {
    const storedItems = localStorage.getItem('KitchenItems');
    console.log("storedItems.length=" + storedItems.length);
    if (!cartItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        //debugger;
        setOrderItems(parsedItems);
      } catch (error) {
        console.error('Error parsing stored items:', error);
        // Handle the error, e.g., clear the invalid stored items
        //localStorage.removeItem('cartItems');
      }
    }
  }, [cartItems]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'KitchenItems') {
        try {
          const parsedItems = JSON.parse(event.newValue);
          setOrderItems(parsedItems);
        } catch (error) {
          console.error('Error parsing stored items:', error);
          // Handle the error, e.g., clear the invalid stored items
          // localStorage.removeItem('kitchenItems');
        }
      }
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  


  return (
    
    <table className="min-w-full border-collapse block md:table">
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
      <tbody>
        {orderItems?.map((item) => (
          <tr key={item.id} className="bg-white shadow rounded-lg p-4">
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">1</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{item.name}</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">None</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{item.quantity}</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                onClick={() => handleDelete(item.id)}
              >
                Done
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Kitchen;
