import React from 'react'
import Link from 'next/link';
import { useRef } from 'react'
import { BiFoodMenu } from 'react-icons/bi';
import { AiOutlinePlusSquare, AiOutlineMinusSquare, AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import Image from 'next/image';


const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div className='flex w-full justify-start bg-rose-300 fixed'>
      <div className="logo">
        <Image width={80} height={80} src="/Logo.png" alt="" />
      </div>
      <div className="nav mx-16 py-3.5 px-6">
        <ul className='flex items-center space-x-16 font-bold'>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/'}><li>Menu</li></Link>
        </ul>
      </div>
      <div className="pt-2 relative ml-24 text-gray-600">
        <input className="bg-white h-10 px-6 pr-16 rounded-2xl text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"></input>
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4 hover:font-bold"><AiOutlineSearch className='cursor-pointer' /></button>
      </div>
      <div onClick={toggleCart} className='cart fixed right-0 top-4 mx-5 cursor-pointer'><BiFoodMenu className='text-xl' /></div>

      <div ref={ref} className="w-72 h-screen sidebar fixed top-0 right-0 bg-rose-200 px-8 py-10 transform transition-transform translate-x-full">
        <h2 className='font-bold text-xl text-center'>My Order</h2>
        <span onClick={toggleCart} className='right-0 top-4 mx-5 fixed cursor-pointer text-xl'><AiOutlineCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className="item flex my-6">
              <div className='w-2/3 font-semibold'>This is my first order.</div>
              <button className='w-1/3 font-semibold flex items-center justify-center'><AiOutlineMinusSquare className='cursor-pointer' /><span className='mx-2'>1</span><AiOutlinePlusSquare className='cursor-pointer' /> </button>
            </div>
          </li>
          <li>
            <div className="item flex my-6">
              <div className='w-2/3 font-semibold'>Paneer Tikka Masala</div>
              <div className='w-1/3 font-semibold flex items-center justify-center'><button><AiOutlineMinusSquare/></button><span className='mx-2'>1</span><button><AiOutlinePlusSquare/></button></div>
            </div>
          </li>
          <li>
            <div className="item flex my-6">
              <div className='w-2/3 font-semibold'>Veg Pulav</div>
              <div className='w-1/3 font-semibold flex items-center justify-center'><button><AiOutlineMinusSquare/></button><span className='mx-2'>1</span><button><AiOutlinePlusSquare/></button></div>
            </div>
          </li>
          <li>
            <div className="item flex my-6">
              <div className='w-2/3 font-semibold'>Kaju Curry</div>
              <div className='w-1/3 font-semibold flex items-center justify-center'><button><AiOutlineMinusSquare/></button><span className='mx-2'>1</span><button><AiOutlinePlusSquare/></button></div>
            </div>
          </li>
          <li>
            <div className="item flex my-6">
              <div className='w-2/3 font-semibold'>Dal Tadka</div>
              <div className='w-1/3 font-semibold flex items-center justify-center'><button><AiOutlineMinusSquare/></button><span className='mx-2'>1</span><button><AiOutlinePlusSquare/></button></div>
            </div>
          </li>
        </ol>
        <button className='flex mx-auto mt-2 text-white bg-green-400 border-0 py-2 px-8 focus:outline-none hover:bg-amber-500 rounded text-lg'>Place Order</button>
        <button className='flex mx-auto mt-2 text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-amber-500 rounded text-lg'>Proceed to Payment</button>
      </div>

    </div>

  )
}

export default Navbar