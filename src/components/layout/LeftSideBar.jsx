import React from 'react'
import Github from "../../../src/assets/img/Icons/github.svg"
import Mail from "../../../src/assets/img/Icons/mail.svg"
import LinkedIn from "../../../src/assets/img/Icons/linkedin.svg"
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const LeftSideBar = () => {
    const navLeft = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo([
                ".navGit",
                ".navLink",
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
        }, navLeft)

        return () => ctx.revert()
    }, [])

    return (
        <nav className='fixed left-10 bottom-0 w-10' ref={navLeft}>
            <ul className='flex flex-col items-center m-0 p-0 gap-5'>
                <li className="group navGit">
                    <a
                        href="https://github.com/tu-usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                        <img
                            src={Github}
                            alt="Perfil GitHub"
                            className="w-6 h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                </li>

                <li className="group navLink">
                    <a
                        href="https://linkedin.com/in/tu-perfil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" block p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                        <img
                            src={LinkedIn}
                            alt="Perfil LinkedIn"
                            className="w-6 h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                </li>

                <li className="group navMail">
                    <a
                        href="mailto:tu-email@example.com"
                        className=" block p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                        <img
                            src={Mail}
                            alt="Mandar Email"
                            className="w-6 h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                </li>
                <div className="navStick w-px h-40 bg-white/30 mt-2 bottom-0"></div>
            </ul>
        </nav>
    )
}
