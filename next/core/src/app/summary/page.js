'use client'
import Navbar from '@/src/Components/Navbar'
import React, { useRef } from 'react'
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';

const OrderSummary = () => {

  const orderSummaryTotal = [
    { Sr: 1, Total: 5000, CGST: 50, SGST: 50, Billing: 5100, }
  ];
  const orderSummary = [
    {
      id: 1, Name: 'Panner Tikka Masala', Quantity: 1, Rate: 180, Amount: 180,
    },
    {
      id: 2, Name: 'Masala Papad', Quantity: 2, Rate: 40, Amount: 80,
    },
    {
      id: 3, Name: 'Roti', Quantity: 8, Rate: 35, Amount: 280,
    },
    {
      id: 4, Name: 'Soup', Quantity: 2, Rate: 50, Amount: 100,
    },
    {
      id: 5, Name: 'Dal Tadka', Quantity: 1, Rate: 80, Amount: 80,
    },
    {
      id: 6, Name: 'Ice Cream', Quantity: 3, Rate: 120, Amount: 360,
    },
  ];
  return (
    <body className='bg-rose-100'>
      <Navbar />
      <p className='text-5xl font-bold pt-16 text-center'>Order Summary</p>
      <div className='p-6 justify-items-stretch rounded-2xl shadow-lg mx-24 my-6 bg-white'>
        <table className='text-center table-auto'>
          <thead>
            <tr>
              <th className='border-b-2 border-dashed border-black border-t-2 w-screen'>Item</th>
              <th className='border-b-2 border-dashed border-black border-t-2 w-screen'>Quantity</th>
              <th className='border-b-2 border-dashed border-black border-t-2 w-screen'>Rate</th>
              <th className='border-b-2 border-dashed border-black border-t-2 w-screen'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orderSummary.map(item => (
              <tr key={item.id}>
                <td className='w-screen text-left font-semibold'>{item.Name}</td>
                <td className='w-screen'>{item.Quantity}</td>
                <td className='w-screen text-right'>{item.Rate}</td>
                <td className='w-screen text-right'>{item.Amount}</td>
              </tr>))}
          </tbody>
        </table>
        <div className='flex py-2 flex-row-reverse border-b-2 border-dashed border-black border-t-2 mt-4'>
          {orderSummaryTotal.map(item => (
            <ul key={item.Sr}>
              <li className='text-left font-semibold'>Total: {item.Total}</li>
              <li className='text-left font-semibold'>CGST: {item.CGST}</li>
              <li className='text-left font-semibold'>SGST: {item.SGST}</li>
              <li className='text-left font-semibold'>Billing: {item.Billing}</li>
            </ul>))}
        </div>
        <div className='flex justify-center mt-4'><button className='rounded-xl p-3 bg-green-500 shadow-lg font-semibold hover:bg-green-600 text-white'>End Order and Proceed</button></div>
      </div>
    </body>
  )
}
//'Order total' for the total cost of the food ordered. 

export default OrderSummary