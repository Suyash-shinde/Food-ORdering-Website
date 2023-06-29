'use client'
import React, { cache, useEffect, useState } from 'react';
import Navbar from '@/src/Components/Navbar';
import MyApp from '../_app';




async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/', {cache : 'no-store'})
  
 
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


export default async function Page(addtocart={addtocart}, removefromcart={removefromcart}, clearcart={clearcart}, cart={cart}, subtotal={subtotal}){
  const posts = await getData()
  return(
    <>
    <Navbar addtocart={addtocart} removefromcart={removefromcart} clearcart={clearcart} cart={cart} subtotal={subtotal}/>
    <div className="bg-rose-300">
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map(item => (
          <div key={item.id} className="bg-white rounded-lg p-4 transition-all duration-350 ease-in-out hover:shadow-xl hover:scale-95">
            <p className="text-gray-500   mb-1 pb-1 text-2xl ">{item.slug}</p>
            <img src={item.product_image} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h2 className="text-xl text-gray-600 font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 pb-3">{item.description}</p>
            <p className="text-gray-600 font-bold text-2xl">&#8377;{item.regular_price}</p>
            <button onClick={addtocart()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  </>
  )
}
 
 

