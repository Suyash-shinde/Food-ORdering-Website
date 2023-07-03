'use client'
import Link from 'next/link';
import React, { useRef } from 'react';
import { BiFoodMenu } from 'react-icons/bi';
import { AiOutlinePlusSquare, AiOutlineMinusSquare, AiOutlineCloseCircle, AiOutlinePlus } from 'react-icons/ai';
import Navbar from '@/src/app/Components/Navbar';
import Footer from '@/src/app/Components/Footer';
import Image from 'next/image';

const Home = () => {
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
        <p className='pt-6 pb-3 font-semibold text-3xl'>Today's Featured</p>
        <div className="flex flex-nowrap px-6 overflow-x-auto">
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
        </div></div>
      <div className='bg-rose-100'>
        <p className='pt-6 pb-3 font-semibold text-3xl'>Customer's Top Picks</p>
        <div className='flex flex-nowrap px-6 overflow-x-auto'>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
          <div className="flex flex-auto flex-col p-4 shadow-xl mx-6 shrink-0 rounded-xl bg-white">
            <Image src="/Backdrp.jpg" width={200} height={100} className='rounded-xl' />
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">Rs.150.00</p>
            </div>
          </div>
        </div></div>
            <Footer className="text-pink-200 body-font" />

     </>
  )
}

export default Home