'use client'
import Link from 'next/link';
import React, { useRef } from 'react';
import { BiFoodMenu } from 'react-icons/bi';
import { AiOutlinePlusSquare, AiOutlineMinusSquare, AiOutlineCloseCircle, AiOutlinePlus } from 'react-icons/ai';
import Navbar from '@/src/Components/Navbar';
import Footer from '@/src/Components/Footer';
import Image from 'next/image';

const Home = () => {
  const menuItems = [
    {
      id: 1, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    {
      id: 2, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    {
      id: 3, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    {
      id: 4, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    {
      id: 5, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    {
      id: 6, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    {
      id: 7, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    {
      id: 8, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    {
      id: 9, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    {
      id: 10, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
    { 
      id: 11, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup.',
    },
    {
      id: 12, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup.',
    },
  ];
  return (
    <>
<Navbar />
      <div className='flex'>
        <div className='text-8xl grow h-screen pt-36 bg-gradient-to-t align-middle from-red-300 to-pink-400 text-red-50'>
          <p className='py-2 px-8 font-sans'>A pinch of passion</p>
          <p className='py-2 px-8 font-sans'>in every taste...</p>
        </div>
      </div>
      <div className='bg-rose-100'>
        <p className='py-6 px-6 font-semibold text-3xl'>Today's Featured</p>
        <div className="flex flex-nowrap px-14 overflow-x-auto">
        {menuItems.map(item => (
              <div key={item.id} className="bg-white w-1/4 rounded-lg p-4 shrink-0 mx-3">
                <p className="text-gray-500 mb-1 pb-1 text-2xl ">{item.category}</p>
                <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                <h2 className="text-xl text-gray-600 font-bold mb-2">{item.name}</h2>
                <p className="text-gray-600 pb-3">{item.description}</p>
                <div className="flex">
                <p className="text-gray-600 font-bold text-2xl">&#8377;{item.price}</p>
                
                <button className="text-white justify-end font-bold p-2 rounded shadow-lg ml-32 border-gray-200 border hover:bg-green-500 hover:transition-transform  hover:text-white"><AiOutlinePlus className='text-green-500 font-extrabold text-3xl hover:transition-transform'/></button></div>
              </div>
            ))}
        </div></div>
      <div className='bg-rose-100'>
        <p className='py-6 px-6 font-semibold text-3xl'>Customer's Top Picks</p>
        <div className="flex flex-nowrap px-14 overflow-x-auto">
        {menuItems.map(item => (
              <div key={item.id} className="bg-white w-1/4 rounded-lg p-4 shrink-0 mx-3">
                <p className="text-gray-500 mb-1 pb-1 text-2xl ">{item.category}</p>
                <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                <h2 className="text-xl text-gray-600 font-bold mb-2">{item.name}</h2>
                <p className="text-gray-600 pb-3">{item.description}</p>
                <div className="flex">
                <p className="text-gray-600 font-bold text-2xl">&#8377;{item.price}</p>
                
                <button className="text-white justify-end font-bold p-2 rounded shadow-lg ml-32 border-gray-200 border hover:bg-green-500 hover:transition-transform  hover:text-white"><AiOutlinePlus className='text-green-500 font-extrabold text-3xl hover:transition-transform'/></button></div>
              </div>
            ))}
        </div></div>
            <Footer className="text-pink-200 body-font" />

     </>
  )
}

export default Home