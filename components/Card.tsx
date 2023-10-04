"use client"

import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { DiReact } from "react-icons/di"


const Card = ({ name = "", description = "" }) => {


    return (
        <div className='border border-1-solid rounded-lg border-bawd dark:border-white  mt-2 w-full'>
            <DiReact className="h-20 w-20 text-dark dark:text-white mx-auto mt-10"/>
            <h3 className='md:text-2xl text-lg font-semibold text-center mt-4 text-bawd dark:text-white'>
                {name}
            </h3>
            <div className='bg-bareBlue w-[100px] px-2 h-auto 
                            mx-auto flex mt-14 rounded-md items-center gap-1.5'>
                <Image src="/star.png" height={6} width={6} alt='Star'
                    className='w-[10px] h-[10px] my-1' />
                <p className='text-tdark md:text-xs text-[10px] my-1'>Star</p>
                <div className='bg-tek rounded-md p-0.5 my-1'>
                    <p className='text-tdark md:text-xs text-[10px]'>15</p>
                </div>
                <div className='border border-r-0 border-bawd h-[20px]' />
                <IoIosArrowDown className="h-3 w-3 text-bawd" />
            </div>

            <div className='flex justify-center md:gap-3 gap-1 mt-4 mx-5'>
                <div className='bg-bareBlue w-auto px-2 h-auto rounded-md items-center'>
                    <p className='text-tdark md:text-xs text-[10px] my-1'>OpenSource</p>
                </div>
                <div className='bg-bareBlue w-auto px-2 h-auto rounded-md items-center'>
                    <p className='text-tdark md:text-xs text-[10px] my-1'>Documentation</p>
                </div>
            </div>

            <p className='text-bawd dark:text-white md:text-base text-[14px] text-center mt-8 mx-5'>
                {description}
            </p>

            <hr className='border border-1-solid border-bawd mt-8' />

            <div className='flex justify-center py-4 gap-3 md:mx-[12px] mx-0'>
                <button className='w-auto h-auto md:p-[10px] p-1.5 rounded-md border border-1-solid border-dark dark:border-white '>
                    <p className='text-dark dark:text-white md:text-sm text-[10px]'>Go to project</p>
                </button>
                <button className='w-auto h-auto md:p-[10px] p-1.5 rounded-md bg-primary'>
                    <p className='text-white md:text-sm text-[10px]'>Edit on Github</p>
                </button>
            </div>
        </div>
    )
}

export default Card