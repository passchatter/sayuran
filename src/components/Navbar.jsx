import React from 'react'
import { useState } from 'react'
import logo from '../img/logo.png'

const Navbar = () => {

 let [open, setOpen] = useState(false)
  return (
   <>
     <header className={`top-0 left-0 md:py-4 py-2 w-full z-30 bg-white shadow-lg`}>
       
        <div className="container lg:px-0">
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={logo} className="w-[70px] h-[50px]" alt="" />
                <h1 className='text-2xl text-green-600 font-semibold'>pass<span className='text-orange-500 font-bold'>Box</span></h1>
              </div>

               <ul className='md:flex hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                    <li><a href="/" className='text-black text-lg'>Home</a></li>
                    <li><a href="/about" className=' text-black text-lg'>About</a></li>
                    <li><a href="/" className='text-black text-lg'>Vegetables</a></li>
                    <li><a href="/" className='text-black text-lg'>Contact</a></li>
                </ul>
              
              <nav className={`z-20 absolute lg:static duration-500 md:w-auto md:bg-transparand shadow-lg md:shadow-none top-0 left-0 w-full bg-white md:bg-transparent px-3 py-5  ${open ? 'top-0 pb-10' : 'top-[-1000%]'}`}>
                <div className="flex items-center gap-2 md:hidden">
                  <img src={logo} className="w-[70px] h-[50px]" alt="" />
                  <h1 className='text-2xl text-green-600 font-semibold'>pass<span className='text-orange-500 font-bold'>Box</span></h1>
                </div>

                <ul className='lg:flex hidden md:flex-row flex-col gap-7 mt-10 md:mt-0 '>
                    <li><a href="/" className='md:text-green-700 font-bold text-2xl'><ion-icon name="person-outline"></ion-icon></a></li>
                    <li><a href="/" className=' md:text-green-700 font-bold text-2xl'><ion-icon name="heart-outline"></ion-icon></a></li>
                    <li><a href="/" className='md:text-green-700 font-bold text-2xl'><ion-icon name="cart-outline"></ion-icon></a></li>
                    <li><a href="/" className='md:text-green-700 font-bold text-2xl'><ion-icon name="notifications-outline"></ion-icon></a></li>
                </ul>

                <ul className='flex md:hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                    <li><a href="/" className='text-black text-lg'>Home</a></li>
                    <li><a href="/about" className=' text-black text-lg'>About</a></li>
                    <li><a href="/" className='text-black text-lg'>Vegetables</a></li>
                    <li><a href="/" className='text-black text-lg'>Contact</a></li>
                </ul>
              </nav>
              <div className=' hidden lg:flex p-1 border-2 max-w-md border-slate-300 rounded-xl'>
                <input type="text" className='px-3 w-full py-2 rounded-xl active:border-orange-500' placeholder='search products...' />
                <button className='text-white bg-orange-500 px-3 py-2 rounded-xl'>Search</button>
               </div>
              <div  onClick={()=> setOpen(!open)} className={`z-20 mt-4 text-4xl md:hidden menu-navbar text-black`}>
                 <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
              </div>
                
           </div>
        </div>
       
 
        <div className="container md:pb-0 pb-3">
          <hr class="border-t border-slate-300"/>
          <ul className='flex lg:hidden flex-row gap-5 mt-4 lg:mt-0 '>
               
                    <li><a href="/" className='z-10 lg:text-green-600 font-bold text-xl'><ion-icon name="person-outline"></ion-icon></a></li>
                    <li><a href="/" className=' z-10 lg:text-green-600 font-bold text-xl'><ion-icon name="heart-outline"></ion-icon></a></li>
                    <li><a href="/" className='z-10 lg:text-green-600 font-bold text-xl'><ion-icon name="cart-outline"></ion-icon></a></li>
                    <li><a href="/" className='z-10 lg:text-green-600 font-bold text-xl'><ion-icon name="notifications-outline"></ion-icon></a></li>
           </ul>

           <div className='mt-3 lg:hidden flex p-1 border-2 max-w-md border-slate-300 rounded-xl'>
            <input type="text" className='px-3 w-full py-2 rounded-xl active:border-orange-500' placeholder='search products...' />
            <button className='text-white bg-orange-500 px-3 py-2 rounded-xl'>Search</button>
           </div>
               
        </div>

     </header>
   </>
  )
}

export default Navbar