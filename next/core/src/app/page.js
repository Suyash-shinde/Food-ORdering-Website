'use client'
 import Link from 'next/link';
 import { useRouter } from 'next/navigation';

// import React, { useRef } from 'react'
// import { BiFoodMenu } from 'react-icons/bi';
// import { AiOutlinePlusSquare, AiOutlineMinusSquare, AiOutlineCloseCircle } from 'react-icons/ai';
// import Navbar from '@/Components/Navbar';
// import Image from 'next/image';


// export default function Home() {
//   return (
//     <>
//     <Navbar />
//     <img src="/Backdrp.jpg"/>
//   </>
//   )
// }

//

import React from 'react'

export default function Page() {
  const router = useRouter()
  return (
    <body className='bg-rose-10'>
      <h1 className='text-4xl font-serif text-center text-white p-4 bg-rose-400'>Login</h1>
    <div className='flex justify-evenly items-center pt-24'>
      <button className='m-4 border-none border-2 rounded-md shadow-xl bg-teal-500 text-center text-white p-6 cursor-pointer font-bold font-sans hover:shadow-teal-800/40'><img src='/Customer Icon.jpg' width={150} className='rounded-xl p-1'/><hr />Customer</button>
      <button  onClick={() => router.push('/kitchen')} className='m-4 border-none border-2 rounded-md shadow-xl bg-teal-500 text-center text-white p-6 cursor-pointer font-bold font-sans hover:shadow-teal-800/40'><img src='/Kitchen Icon.jpg' width={150} className='rounded-xl p-1'/><hr />Kitchen</button>
      <button className='m-4 border-none border-2 rounded-md shadow-xl bg-teal-500 text-center text-white p-6 cursor-pointer font-bold font-sans hover:shadow-teal-800/40'><img src='/Cash Counter Icon.jpg' width={150} className='rounded-xl p-1'/><hr />Cash Counter</button>
    </div>
    </body>
  )
}




