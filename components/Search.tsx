import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const SearchPage = () => {
    return (
        <div className='w-full 2xl:px-56 px-4 flex items-center mt-10 2xl:gap-10 gap-5'>
            <div className='flex border border-1-solid border-bawd dark:border-white 
            px-5 py-4 items-center rounded-lg w-full gap-2'>
                <BiSearch className="w-5 h-5 text-bawd  dark:text-white"/>
                <input className="w-full text-bawd focus:outline-none dark:bg-tdark" placeholder="Search"/>
            </div>
            <div className='flex border border-1-solid border-bawd  dark:border-white 
            px-5 py-4 items-center justify-between rounded-lg w-full gap-2'>
                <p className="font-[16px] text-tdark w-full  dark:text-white">Filter</p>
                <IoIosArrowDown className="w-5 h-5 text-bawd  dark:text-white"/>
            </div>
        </div>
    )
}

export default SearchPage