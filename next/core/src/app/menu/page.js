'use client'
import React from 'react';
import Navbar from '@/src/Components/Navbar';
import Image from 'next/image';
import { AiOutlinePlusSquare, AiOutlineMinusSquare, AiOutlineCloseCircle, AiOutlinePlus } from 'react-icons/ai';


const MenuPage = () => {
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
    { id: 11, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg' },
    {
      id: 12, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Somato BSoup.',
    },
    {
      id: 1, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Somato BSoup.',
    },
    {
      id: 2, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Somato BSoup.',
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
      id: 7, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Sunato BisSo.',
    },
    {
      id: 8, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg', description: 'Embark on a sensory journey with our "Tomato Soup".',
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-rose-100">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {menuItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl p-4 transition-all  hover:shadow-2xl">
                <p className="text-gray-500 mb-1 pb-1 text-2xl ">{item.category}</p>
                <Image src={item.imageUrl} alt={item.name} width={250} height={250} className="object-cover mb-4 rounded-xl" />
                <h2 className="text-xl text-gray-600 font-bold mb-2">{item.name}</h2>
                <p className="text-gray-600 pb-3">{item.description}</p>
                <div className="flex">
                <p className="text-gray-600 font-bold text-2xl">&#8377;{item.price}</p>
                
                <button className="text-white justify-end font-bold p-2 rounded shadow-lg ml-24 border-gray-200 border hover:"><AiOutlinePlus className='text-green-500 font-extrabold text-2xl'/></button></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;