import React from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'

export const RightSideBar = () => {
    const ref = useFadeIn([
        ".navMail",
        ".navStick"],
        1.2,
        0.5,
        0.25)

    return (
        <nav className='hidden md:flex fixed right-6 md:right-8 lg:right-10 xl:right-10 bottom-0 w-10 flex-col justify-center items-center' ref={ref}>
            <a href='mailto:adrianc.crim@hotmail.com' className="navMail [writing-mode:vertical-rl] m-auto text-neutral-400 font-['Syne'] text-sm md:text-base">
                adrianc.crim@hotmail.com
            </a>
            <div className="navStick w-px h-32 md:h-36 lg:h-40 xl:h-40 bg-white/30 mt-5 bottom-0"></div>
        </nav>
    )
}