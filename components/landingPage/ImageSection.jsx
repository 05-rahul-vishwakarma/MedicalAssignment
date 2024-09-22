import Image from 'next/image'
import React from 'react'

function ImageSection() {
    return (
        <section className='md:flex items-end md:h-[60vh] relative rounded-lg  w-full ' >
            <div style={{ boxShadow: "0 4px 4px #00000036" }} className='w-[90%] mx-auto md:h-[90%] justify-center flex items-center  bg-[#02A995] rounded-lg drop-shadow-sm   ' >
                <div className=" md:pl-12 md:w-[80%]  w-[50%]  ">
                    <h2 className="text-white text-sm md:text-2xl font-semibold md:w-[40%] w ">
                        Teleconsult Our Course Advisor
                    </h2>
                    <button className="bg-white text-teal-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 my-4 text-sm ">
                        Book a Call
                    </button>
                </div>

                <div className='w-[40%] h-full  ' >
                    <Image src={'/Image.svg'} alt='img' width={100} height={100} className='w-full object-contain h-full ' />
                </div>
            </div>
            <div className='absolute top-0 right-0  w-[40%] h-full hidden md:block ' >
                <Image src={'/Image.svg'} alt='img' width={100} height={100} className='w-full object-contain h-full ' />
            </div>
        </section>
    )
}

export default ImageSection

