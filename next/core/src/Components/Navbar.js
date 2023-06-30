import React from 'react'
import Link from 'next/link';
import { useRef } from 'react'
import { BiFoodMenu } from 'react-icons/bi';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import Image from 'next/image';


const Navbar = () => {
  const menuItems = [
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
          <Link href={'/home'}><li>Home</li></Link>
          <Link href={'/menu'}><li>Menu</li></Link>
          <Link href={'/summary'}><li>Order Summary</li></Link>
        </ul>
      </div>
      <div className="pt-2 relative ml-20 text-gray-600">
        <input className="bg-white h-8 px-6 pr-16 rounded-2xl text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"></input>
        <button type="submit" className="absolute right-0 top-0 mt-4 mr-4 hover:font-bold"><AiOutlineSearch className='cursor-pointer' /></button>
      </div>
      <div onClick={toggleCart} className='cart fixed right-0 top-4 mx-5 cursor-pointer'><BiFoodMenu className='text-xl' /></div>

      <div ref={ref} className="w-72 h-screen sidebar fixed top-0 right-0 px-8 py-10 transform transition-transform translate-x-full backdrop-blur-xl bg-white/30">
        <h2 className='font-bold text-xl text-center'>My Order</h2>
        <span onClick={toggleCart} className='right-0 top-4 mx-5 fixed cursor-pointer text-xl'><AiOutlineCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          {menuItems.map(item => (
            <li>
              <div className="item flex my-6">
                <div className='w-2/3 font-semibold'>{item.Name}</div>
                <button className='w-1/3 font-semibold flex items-center justify-center rounded-md bg-rose-200'><AiOutlineMinus className='cursor-pointer' /><span className='mx-2 bg-rose-200'>{item.Quantity}</span><AiOutlinePlus className='cursor-pointer' /></button>
              </div>
            </li>))}
        </ol>
        <button className='flex mx-auto mt-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg'>Place Order</button>
        <button className='flex mx-auto mt-2 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded-lg text-lg'>Proceed to Payment</button>
      </div>

    </div>

  )
}

export default Navbar