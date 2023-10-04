"use client"

import { SiDiscord, SiTwitter, SiYoutube, SiGithub } from "react-icons/si";
import { useState } from "react"
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useThemeSwitcher();


    const handleClick = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='flex items-center justify-between'>
            <h2 className='flex-1 sm:text-[24px] text-base font-bold'>Awesome OSS Docs</h2>

            <div className="flex gap-16">

                <div className="items-center gap-[23px] hidden lg:flex">
                    <div className="flex items-center gap-[10px]">
                        <SiDiscord className="w-[30px] h-[30px]" />
                        <p className="text-[16px] font-medium">Discord</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <SiTwitter className="w-[30px] h-[30px]" />
                        <p className="text-[16px] font-medium">Twitter</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <SiYoutube className="w-[30px] h-[30px]" />
                        <p className="text-[16px] font-medium">Youtube</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <SiGithub className="w-[30px] h-[30px]" />
                        <p className="text-[16px] font-medium">Github</p>
                    </div>
                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className="items-center rounded-full p-1">
                        {
                            mode === "dark" ?
                                <BsFillSunFill className={"h-6 w-6"} /> :
                                <BsFillMoonStarsFill className={"h-6 w-6"} />
                        }
                    </button>
                </div>

            </div>

            <div className="flex sm:gap-6 gap-3">

                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className="items-center rounded-full p-1 lg:hidden">
                    {
                        mode === "dark" ?
                            <BsFillSunFill className={"h-6 w-6"} /> :
                            <BsFillMoonStarsFill className={"h-6 w-6"} />
                    }
                </button>

                <button className="flex-col justify-center items-center flex lg:hidden" onClick={handleClick}>
                    <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5 '}`}></span>
                    <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5 '}`}></span>
                </button>

            </div>


            {
                isOpen ?
                    <div className="items-start gap-[23px] flex flex-col
            gap-y-5 min-w-[200px] fixed top-20 right-10 p-8 lg:hidden bg-dark  dark:bg-tdark">
                        <div className="flex items-center gap-[10px]">
                            <SiDiscord className="w-[30px] h-[30px]" />
                            <p className="text-[16px] font-medium">Discord</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <SiTwitter className="w-[30px] h-[30px]" />
                            <p className="text-[16px] font-medium">Twitter</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <SiYoutube className="w-[30px] h-[30px]" />
                            <p className="text-[16px] font-medium">Youtube</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <SiGithub className="w-[30px] h-[30px]" />
                            <p className="text-[16px] font-medium">Github</p>
                        </div>
                    </div>

                    : null
            }
        </div>
    )
}

export default Navbar