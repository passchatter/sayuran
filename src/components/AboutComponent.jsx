import React from 'react'
import gambar2 from '../img/home2.jpg'
import gambar3 from '../img/about3.png'

const AboutComponent = () => {
  return (
    <>
     <div className="container section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 items-center gap-2">
                <div className="">
                   <img src={gambar2} alt="" className='rounded-xl shadow-md'/>
                </div>
                <div className="">
                    <img src={gambar3} alt="" className='mb-2 rounded-xl shadow-md'/>
                    <img src={gambar2} alt="" className='rounded-xl shadow-md'/>
                </div>
            </div>

            <div className="">
                <p className='font-dancing text-green-600 text-3xl'>About Us</p>
                <h1 className='py-4 text-title font-semibold font-bodyfont text-3xl md:text-4xl leading-[3rem]'>We Believe In Working With Acrredited farmers</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cumque eos tempore sequi omnis repudiandae praesentium quisquam ab dolores. Sed harum aspernatur iure veniam tenetur eligendi porro quae hic earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quasi modi laudantium soluta quaerat dolor?</p>
                <button className='text-white bg-green-600 px-4 py-3 rounded-xl mt-5'>Learn More</button>
            </div>
        </div>
     </div>
    </>
  )
}

export default AboutComponent