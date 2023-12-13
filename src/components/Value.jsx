import React from 'react'
import gambar1 from '../img/people.png'
import gambar2 from '../img/vegetable.png'
import gambar3 from '../img/gift.png'
import gambar4 from '../img/award.png'

import testi1 from '../img/testimonial-1.jpg'
import testi2 from '../img/testimonial-2.jpg'
import testi3 from '../img/testimonial-3.jpg'

import hero1 from '../img/hero-left-bg.png'
import hero2 from '../img/hero-right-bg.png'

const Value = () => {
  return (
   <>
<div className="section">
    <div className="bg-gradient-to-r py-20 md:py-36 from-[#dbf5b0] to-[#eef8df] relative">
        <img src={hero1} alt="" className='absolute top-3 left-6'/>
        <div className="container gap-6 md:gap-3 items-center justify-around grid md:grid-cols-4">
            <div className="flex gap-3 items-center font-bodyfont">
                <img src={gambar1} alt="" className='w-[70px] h-[70px]' />
                <div className="">
                    <h1 className='text-green-600 text-5xl font-semibold'>128+</h1>
                    <p className='text-title'>costumers trusted</p>
                </div>
            </div>
            <div className="flex gap-3 items-center font-bodyfont">
                <img src={gambar2} alt="" className='w-[70px] h-[70px]' />
                <div className="">
                    <h1 className='text-green-600 text-5xl font-semibold'>147+</h1>
                    <p className='text-title'>vegetable products</p>
                </div>
            </div>
            <div className="flex gap-3 items-center font-bodyfont">
                <img src={gambar3} alt="" className='w-[70px] h-[70px]' />
                <div className="">
                    <h1 className='text-green-600 text-5xl font-semibold'>290+</h1>
                    <p className='text-title'>active product</p>
                </div>
            </div>
            <div className="flex gap-3 items-center font-bodyfont">
                <img src={gambar4} alt="" className='w-[70px] h-[70px]' />
                <div className="">
                    <h1 className='text-green-600 text-5xl font-semibold'>30+</h1>
                    <p className='text-title'>award winning</p>
                </div>
            </div>
            
        </div>

        <div className="container mt-36">
            <div className="text-center mx-auto mb-7">
                <h1 className='text-3xl text-title font-title'>Why Customer Love Us</h1>
            </div>

            <div className="grid gap-3  md:grid-cols-3">
                <div className="p-8 shadow-xl rounded-md border-b-4 border-b-green-500">
                   <ul className='flex gap-1 mb-2'>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
                    <p className='text-[.9rem] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est. Suscipit, modi natus maxime recusandae enim similique. Laborum, consequuntur maxime!</p>
                    <div className="flex items-center gap-4 mt-6">
                        <img src={testi1} alt="" className='rounded-full w-[50px] h-[50px]' />
                        <div className="">
                            <h1 className='text-lg text-title'>Kevin Adreas</h1>
                            <p className='text-[.9rem] text-slate-600'>Farmer broccoli</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 shadow-xl rounded-md border-b-4 border-b-green-500">
                   <ul className='flex gap-1 mb-2'>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
                    <p className='text-[.9rem] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est. Suscipit, modi natus maxime recusandae enim similique. Laborum, consequuntur maxime!</p>
                    <div className="flex items-center gap-4 mt-6">
                        <img src={testi2} alt="" className='rounded-full w-[50px] h-[50px]' />
                        <div className="">
                            <h1 className='text-lg text-title'>Kevin Adreas</h1>
                            <p className='text-[.9rem] text-slate-600'>Farmer broccoli</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 shadow-xl rounded-md border-b-4 border-b-green-500">
                   <ul className='flex gap-1 mb-2'>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
                    <p className='text-[.9rem] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est. Suscipit, modi natus maxime recusandae enim similique. Laborum, consequuntur maxime!</p>
                    <div className="flex items-center gap-4 mt-6">
                        <img src={testi3} alt="" className='rounded-full w-[50px] h-[50px]' />
                        <div className="">
                            <h1 className='text-lg text-title'>Kevin Adreas</h1>
                            <p className='text-[.9rem] text-slate-600'>Farmer broccoli</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={hero2} alt="" className='absolute bottom-3 right-6'/>
    </div>
</div>

   
        
    
   </>
  )
}

export default Value