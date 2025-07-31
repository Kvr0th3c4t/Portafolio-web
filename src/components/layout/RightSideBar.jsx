import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const RightSideBar = () => {
    const navRight = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo([
                ".navMail",
                ".navStick"
            ],
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    delay: 1.2,
                    duration: 0.5,
                    stagger: 0.25,
                    ease: "power2.out"
                })
        }, navRight)

        return () => ctx.revert()
    }, [])

    return (
        <nav className='fixed right-10 bottom-0 w-10 flex flex-col justify-center items-center' ref={navRight}>
            <a href='mailto:adrianc.crim@hotmail.com' className="navMail [writing-mode:vertical-rl] m-auto text-neutral-400 font-['Syne']">adrianc.crim@hotmail.com</a>
            <div className="navStick w-px h-40 bg-white/30 mt-5 bottom-0"></div>
        </nav>
    )
}
