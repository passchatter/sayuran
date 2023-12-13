import React from 'react'
import testi1 from '../img/testimonial-1.jpg'

const Costumer = () => {
  return (
   <>
    <div className="container section">
        <div className="heding text-center py-9">
            <h1 className='text-title font-semibold text-3xl'>Customer Review</h1>
        </div>

        <div className="max-w-lg mx-auto p-10 rounded-3xl shadow-lg">
           <div className="">
             <p className='text-[.9rem] text-slate-600 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores illo autem possimus. Quidem laboriosam, sapiente aperiam quas rerum commodi recusandae corporis dignissimos quibusdam voluptatibus assumenda quos neque architecto veniam quam.</p>
             <ul className='flex gap-1 justify-center mt-6'>
                        <li className='text-sm text-yellow-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-sm text-yellow-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-sm text-yellow-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-sm text-yellow-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-sm text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
             <div className="flex gap-2 mt-3 items-center mx-auto justify-center">
                <img src={testi1} alt="" className='rounded-full w-[70px] h-[70px]'/>
                <div className="">                   
                    <h1 className='font-title text-md text-title'>Kevin Andrew</h1>
                    <p className='text-[.9rem] text-slate-600'>farmet broccoli</p>
                </div>
             </div>
           </div>
        </div>
    </div>
   </>
  )
}

export default Costumer