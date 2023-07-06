'use client'
import Navbar from '@/src/app/Components/Navbar';
import React, { useState,useEffect  } from 'react';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';

const OrderSummary = ({cartItems}) => {
    const taxRate = 0.09;  
  const [orderSummary, setOrderItems] = useState([]);
  useEffect(() => {
    
    const storedItems = localStorage.getItem('OrderItems');
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
  const clearCartItems = () => {
    //<Kitchen cartItems={cartItems} />        
    //const storedItems = localStorage.getItem('cartItems');
    //localStorage.setItem('kitchenItems', localStorage.getItem('cartItems'));

    localStorage.removeItem('OrderItems')
    setOrderItems([]);

   // localStorage.removeItem('cartItems');    
    //setCartItems([]);
  };
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'OrderItems') {
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
  const orderSummaryTotal = [
    { Sr: 1, Total: orderSummary ? orderSummary.reduce((total, item) => total + (item.price * item.quantity), 0):0,
         CGST:  orderSummary ? (orderSummary.reduce((total, item) => total + (item.price * item.quantity), 0) * taxRate).toFixed(2) : 0,
          SGST:  orderSummary ? (orderSummary.reduce((total, item) => total + (item.price * item.quantity), 0) * taxRate).toFixed(2) : 0,
           Billing: orderSummary ? (orderSummary.reduce((total, item) => total + (item.price * item.quantity), 0) * (1 + (2 * taxRate))).toFixed(2) : 0 }
  ];
  return (
    <body className='bg-rose-200'>
      <Navbar />
      <p className='text-5xl font-bold pt-16 text-center'>Order Summary</p>
      <div className='p-6 justify-items-stretch rounded-2xl shadow-lg mx-24 my-6 bg-rose-200'>
        <table className='text-center table-auto'>
          <thead>
            <tr>
              <th className='border-b-2 border-dashed border-black border-t-2 w-screen'>Item</th>
              <th className='border-b-2 border-dashed border-black border-t-2 w-screen'>Quantity</th>
              <th className='border-b-2 border-dashed border-black border-t-2 w-1/12'>Rate</th>
              <th className='border-b-2 border-dashed border-black border-t-2 w-1/12'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orderSummary?.map(item => (
              <tr key={item.id}>
                <td className='w-screen text-center font-semibold'>{item.name}</td>
                <td className='w-screen'>{item.quantity}</td>
                <td className='w-1/12 pr-6 text-right'>{item.price}</td>
                <td className='w-1/12 pr-6 text-right'>{item.price*item.quantity}</td>
              </tr>))}
          </tbody>
        </table>
        <div className='flex py-2 flex-row-reverse border-b-2 border-dashed border-black border-t-2 mt-4'>
          {orderSummaryTotal?.map(item => (
            <ul key={item.Sr} className='pr-6'>
              <li className='text-left font-semibold'>Total: {item.Total}</li>
              <li className='text-left font-semibold'>CGST: {item.CGST}</li>
              <li className='text-left font-semibold'>SGST: {item.SGST}</li>
              <li className='text-left font-semibold'>Billing: {item.Billing}</li>
            </ul>))}
        </div>
        <div className='flex justify-center mt-4'><button className='rounded-xl p-3 bg-green-500 shadow-lg font-semibold hover:bg-green-600 text-white'   onClick={() => clearCartItems()}>End Order and Proceed</button></div>
      </div>
    </body>
  )
}
//'Order total' for the total cost of the food ordered. 

export default OrderSummary