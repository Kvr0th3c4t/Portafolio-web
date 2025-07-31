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
        <nav className='fixed right-10 bottom-0 w-10 flex flex-col justify-center items-center' ref={ref}>
            <a href='mailto:adrianc.crim@hotmail.com' className="navMail [writing-mode:vertical-rl] m-auto text-neutral-400 font-['Syne']">adrianc.crim@hotmail.com</a>
            <div className="navStick w-px h-40 bg-white/30 mt-5 bottom-0"></div>
        </nav>
    )
}
