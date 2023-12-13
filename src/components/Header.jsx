import React from 'react'
import header from '../img/homee.png'
import organik from '../img/organik.png'
import card from '../img/card.png'
import free from '../img/free.png'
import time from '../img/time.png'
import gambar2 from '../img/whyCoose.jpg'


const Header = () => {
  return (
    <>
    <div className="bg-gradient-to-r md:py-2 py-10  from-[#dbf5b0] to-[#eef8df] ">

      <div className="rounded-lg md:py-2 py-10  w-full h-auto">
        <div className="container md:mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center justify-between">
             <div className="content">
              <p className="font-bodyfont text-[#05081E] font-[900] text-2xl md:text-3xl mb-3">fresh vegetables</p>
              <h1 className='text-green-600 text-bodyfont font-bold text-3xl md:text-5xl my-1'>SIMPLY DELICIOUS </h1>
              <h1 className='text-[#05081E] text-bold text-1xl text-4xl leading-[3rem]'>Healthy FOOD & ORGANIC MARKET</h1>
              <p className='text-[#05081E] mt-2 mb-4'>we provide high quality organic products</p>
              <button className='text-white px-5 py-3 rounded-lg bg-orange-500 outline-none font-semibold'>buy now</button>
             </div>
             <div className="img pb-5 md:p-0 p-8">
               <img src={header} alt="" className='md:h-[60%] md:w-[85%] w-full h-full'/>
             </div>
          </div>
        </div>
      </div>
        <div className="container mt-11">
          <div className="mt-9 px-9 py-8 bg-white rounded-xl shadow-md">
            <div className="grid lg:grid-cols-4 gap-x-8 md:grid-cols-2 gap-y-6 grid-cols-1 items-center justify-between">
              <div className="max-w-sm flex gap-2">
                  <img src={organik} alt="" className='w-[70px] h-[70px]' />
                  <div>
                    <p className='font-semibold text-[1rem] text-title'>Organic Products</p>
                    <p className='text-[.9rem]'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
              
              <div className="max-w-sm flex gap-2">
                  <img src={free} alt="" className='w-[70px] h-[70px]' />
                  <div>
                      <p className='font-semibold text-[1rem] text-title'>Free Delivery</p>
                      <p className='text-[.9rem]'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
              <div className="max-w-sm flex gap-2">
                  <img src={card} alt="" className='w-[70px] h-[70px]' />
                  <div>
                      <p className='font-semibold text-[1rem] text-title'>Scurity Payment</p>
                      <p className='text-[.9rem]'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
              <div className="max-w-sm flex gap-2">
                  <img src={time} alt="" className='w-[70px] h-[70px]' />
                  <div>
                      <p className='font-semibold text-[1rem] text-title'>On Time</p>
                      <p className='text-[.9rem]'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container section">
          <div className="heding text-center py-9">
             <h1 className='text-title font-semibold text-3xl'>Why Choose Us</h1>
             <p className='text-orange-500 font-dancing text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className="grid mt-6 lg:grid-cols-3 gap-x-8 gap-y-6 grid-cols-1 items-center justify-between">
              <div className="mx-auto">
                <div className="flex mb-10 gap-4 items-center">
                   <div className="w-auto">
                     <p className='w-10 h-10 leading-10 bg-green-600 text-white rounded-full text-center'>1</p>
                   </div>
                    <div className='w-full'>
                        <p className='font-semibold text-[1rem] text-title'>Guaranteed Vegetable Quality</p>
                        <p className='text-[.9rem]'>We provide the freshest, highest-quality vegetables, free from artificial additives.</p>
                    </div>
                </div>
                <div className="flex mb-10 gap-4">
                    <div className="w-auto">
                       <p className='w-10 h-10 leading-10 bg-green-600 text-white rounded-full text-center'>2</p>
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold text-[1rem] text-title'>Preservative-Free and Chemical-Free</p>
                        <p className='text-[.9rem]'>By choosing us, you're supporting local farmers.</p>
                    </div>
                </div>
                <div className="flex mb-10 gap-4 items-center ">
                   <div className="w-auto">
                   <p className='w-10 h-10 leading-10 bg-green-600 text-white rounded-full text-center'>3</p>
                   </div>
                    <div className='w-full'>
                        <p className='font-semibold text-[1rem] text-title'>Local Sourcing</p>
                        <p className='text-[.9rem]'> We promise that our vegetables are delivered at their peak freshness nutrition.</p>
                    </div>
                </div>
              </div>
              <div className="p-7 lg:p-0">
                 <img src={gambar2} alt="" className='md:w-[400px] md:max-auto md:h-[400px]'/>
              </div>
              <div className="mx-auto">
              <div className="flex mb-10 gap-4 items-center lg:text-end">
                    <div className="w-auto lg:order-1">
                      <p className='w-10 h-10 leading-10 bg-green-600 text-white rounded-full text-center'>4</p>
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold text-[1rem] text-title'>Freshness Guarantee</p>
                        <p className='text-[.9rem]'>Explore a wide array of vegetables, from staples to exotic varieties.</p>
                    </div>
                </div>
                <div className="flex mb-10 gap-4 items-center lg:text-end">
                   <div className="w-auto lg:order-1">
                   <p className='w-10 h-10 leading-10 bg-green-600 text-white rounded-full text-center'>5</p>
                   </div>
                    <div className='w-full'>
                        <p className='font-semibold text-[1rem] text-title'>Wide Variety</p>
                        <p className='text-[.9rem]'>Our commitment to no preservatives or harmful chemicals guarantees you're serving.</p>
                    </div>
                </div>
                <div className="flex mb-10 gap-4 items-center lg:text-end">
                    <div className="w-auto lg:order-1">
                      <p className='w-10 h-10 leading-10 bg-green-600 text-white rounded-full text-center'>6</p>
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold text-[1rem] text-title'>Convenient Online Shopping</p>
                        <p className='text-[.9rem]'>Enjoy a seamless online shopping experience with doorstep delivery.</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
