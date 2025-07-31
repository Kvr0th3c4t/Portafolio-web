import React from 'react'
import Github from "../../../src/assets/img/Icons/github.svg"
import Mail from "../../../src/assets/img/Icons/mail.svg"
import LinkedIn from "../../../src/assets/img/Icons/linkedin.svg"
import { useFadeIn } from '../../hooks/useFadeIn'

export const LeftSideBar = () => {

    const ref = useFadeIn([
        ".navGit",
        ".navLink",
        ".navMail",
        ".navStick"],
        1.2,
        0.5,
        0.25)

    return (
        <nav className='fixed left-10 bottom-0 w-10' ref={ref}>
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
