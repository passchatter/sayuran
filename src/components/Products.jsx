import React from 'react'
import gambar1 from '../img/broccoli.jpg'
import gambar2 from '../img/peas.jpg'
import gambar4 from '../img/kubis.jpg'
import gambar5 from '../img/cabbage.jpg'
import gambar6 from '../img/chinese-broccoli.jpg'

const Products = () => {
  return (
    <>
     <div className="container section">

          <div className="heding flex justify-between py-9">
              <div className="flex gap-3 items-center">
                <div className="bg-green-600 h-full w-[10px]"></div>
                <h1 className='text-title text-xl font-semibold'> Best Selling Product</h1>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <a href="/" className='text-white bg-green-600 px-4 py-3 rounded-xl'>See More</a>
              </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:grid-cols-5">
            <div className="p-5 rounded-md shadow-md">
                <img src={gambar1} alt="" className='w-[220px] h-[170px] md:h-[220px] mx-auto' />
                  <ul className='flex gap-1'>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                  </ul>
                  <p className='text-slate-400 text-[.9rem]'>organic vegetables</p>
                  <p className='text-md'>vegetable - frest, broccoli</p>
                  <h1 className='font-semibold py-2'>Rp.3000.00</h1>
                  <button className='text-white px-4 py-1 rounded-md bg-orange-500'>buy now</button>
            </div>
            
            <div className="p-5 rounded-md shadow-md">
                <img src={gambar5} alt="" className='w-[220px] h-[170px] md:h-[220px] mx-auto' />
                  <ul className='flex gap-1'>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                  </ul>
                  <p className='text-slate-400 text-[.9rem]'>organic vegetables</p>
                  <p className='text-md'>vegetable - frest, broccoli</p>
                  <h1 className='font-semibold py-2'>Rp.3000.00</h1>
                  <button className='text-white px-4 py-1 rounded-md bg-orange-500'>buy now</button>
            </div>
            
            <div className="p-5 rounded-md shadow-md">
                <img src={gambar6} alt="" className='w-[220px] h-[170px] md:h-[220px] mx-auto' />
                  <ul className='flex gap-1'>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                  </ul>
                  <p className='text-slate-400 text-[.9rem]'>organic vegetables</p>
                  <p className='text-md'>vegetable - frest, broccoli</p>
                  <h1 className='font-semibold py-2'>Rp.3000.00</h1>
                  <button className='text-white px-4 py-1 rounded-md bg-orange-500'>buy now</button>
            </div>
            
            <div className="p-5 rounded-md shadow-md">
                <img src={gambar4} alt="" className='w-[220px] h-[170px] md:h-[220px] mx-auto' />
                  <ul className='flex gap-1'>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                  </ul>
                  <p className='text-slate-400 text-[.9rem]'>organic vegetables</p>
                  <p className='text-md'>vegetable - frest, broccoli</p>
                  <h1 className='font-semibold py-2'>Rp.3000.00</h1>
                  <button className='text-white px-4 py-1 rounded-md bg-orange-500'>buy now</button>
            </div>
            
            <div className="p-5 rounded-md shadow-md">
                <img src={gambar2} alt="" className='w-[220px] h-[170px] md:h-[220px] mx-auto' />
                  <ul className='flex gap-1'>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                    <li className='text-md text-yellow-500'><ion-icon name="star"></ion-icon></li>
                  </ul>
                  <p className='text-slate-400 text-[.9rem]'>organic vegetables</p>
                  <p className='text-md'>vegetable - frest, broccoli</p>
                  <h1 className='font-semibold py-2'>Rp.3000.00</h1>
                  <button className='text-white px-4 py-1 rounded-md bg-orange-500'>buy now</button>
            </div>
           
          </div>


    

     </div>
    </>
  )
}

export default Products