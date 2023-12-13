import React from 'react'
import blog1 from '../img/blog1.jpg'
import blog2 from '../img/about2.jpg'

import diskon from '../img/home-busket.png'

const Blog = () => {
  return (
   <>
     <div className="container section">
        <div className="mx-auto text-center mb-16 relative">
            <p className='text-orange-500 text-lg'>-- News And Blog --</p>
            <h1 className='text-title font-title text-3xl'>Bright Side Vegetarianism</h1>
           
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 z-10 relative">
            <div className="rounded-lg shadow-md p-4">
                <div className="">
                  <img src={blog1} alt="" className='rounded-lg mb-1  w-full h-[250px] '/>
                </div>
               <div className="">
                <h1 className='text-title font-bodyfont text-xl font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className='text-slate-600 text-[.8rem] mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi commodi facilis esse iusto quibusdam repellat molestiae facere! Obcaecati, praesentium.</p>
                <a href="/" className='text-lg text-orange-500 underline-offset-1 flex items-center gap-2'>learn more <ion-icon name="arrow-forward"></ion-icon></a>
               </div>
            </div>
            <div className="rounded-lg shadow-md p-4">
                <div className="">
                  <img src={blog2} alt="" className='rounded-lg mb-1  w-full h-[250px] '/>
                </div>
               <div className="">
                <h1 className='text-title font-bodyfont text-xl font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className='text-slate-600 text-[.8rem] mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi commodi facilis esse iusto quibusdam repellat molestiae facere! Obcaecati, praesentium.</p>
                <a href="/" className='text-lg text-orange-500 underline-offset-1 flex items-center gap-2'>learn more <ion-icon name="arrow-forward"></ion-icon></a>
               </div>
            </div>
            <div className="rounded-lg shadow-md p-4">
                <div className="">
                  <img src={blog1} alt="" className='rounded-lg mb-1 w-full h-[250px]'/>
                </div>
               <div className="">
                <h1 className='text-title font-bodyfont text-xl font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className='text-slate-600 text-[.8rem] mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi commodi facilis esse iusto quibusdam repellat molestiae facere! Obcaecati, praesentium.</p>
                <a href="/" className='text-lg text-orange-500 underline-offset-1 flex items-center gap-2'>learn more <ion-icon name="arrow-forward"></ion-icon></a>
               </div>
            </div>
        </div>
     </div>

     <div className="section">
        <div class="bg-opacity-50 bg-cover bg-hero bg-no-repeat h-[70vh] bg-center flex items-center justify-center text-center">
            <h1 class='font-title text-4xl md:text-5xl text-white text-shadow'>Fresh Organic Vegetables</h1>
        </div>
     </div>

     <div className="section container">
        <div className="bg-gradient-to-r relative md:py-8 py-10 justify-center items-center from-[#dbf5b0] to-[#eef8df] rounded-xl shadow-md p-7 grid md:grid-cols-2 gap-6">
       
              <img src={diskon} alt="" />  
        
           <div className="">
               <p className='font-bold text-green-600 text-xl mb-4'>-- Summer Offer --</p>
               <h1 className='text-3xl leading-[2.5rem] text-title font-title'>Up To 50% Off All Product.</h1>
               <p className='text-slate-600 text-md mt-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque temporibus ea eius veritatis doloremque rem consequuntur laboriosam et accusamus ipsum.</p>
               <button className='text-white px-5 py-3 rounded-lg bg-orange-500 outline-none font-semibold mt-6'>Show Now</button>
           </div>
        </div>
     </div>
   </>
  )
}

export default Blog