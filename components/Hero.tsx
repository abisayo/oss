import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const HeroPage = () => {
  return (
    <div className='w-full h-auto 2xl:px-60 md:px-12 px-10 pt-[37px] bg-dark  dark:bg-tdark dark:border-b'>
        <Navbar />
        <div className='md:flex items-center justify-between gap-10'>
            <div className='mt-'>
                <h2 className='xl:text-4xl text-3xl font-extrabold 
                sm:mt-24 md:mt-0 mt-16 sm:text-center md:text-left'>
                Make your contributions<br /> to Awesome OSS Docs
                </h2>
                <button className='mt-[40px] bg-primary py-2 px-9 rounded-lg sm:flex sm:mx-auto md:mx-0'>
                    <p className='xl:text-[24px] text-[16px] font-semibold'>Get Started</p>
                </button>
            </div>

            <div className='mt-14 mb-4'>
                <Image src="/g10.png" height={500} width={600} alt='Herp-Image' className='' />
            </div>
        </div>
    </div>
  )
}

export default HeroPage