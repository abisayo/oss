import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { AirBnBPage, ApachePage, ApplePage, FacebookPage, } from '@/components/index';
import { apples } from "../constants/files";
import Card from './Card';

const ContentSection = () => {
    return (
        <>
            <div className='w-full 2xl:px-56 px-3 flex items-center mt-16 2xl:gap-10 gap-5'>
                <div className='lg:flex gap-14'>
                    <AirBnBPage />
                    <ApachePage />
                </div>
            </div>

            <div className='w-full 2xl:px-56 px-3 mt-16'>
                <ApplePage />
            </div>

            <div className='w-full 2xl:px-56 px-3 mt-16'>
                <FacebookPage />
            </div>

        </>
    )
}

export default ContentSection