import React from 'react'
import Github from "../../../src/assets/img/Icons/github.svg"
import Mail from "../../../src/assets/img/Icons/mail.svg"
import LinkedIn from "../../../src/assets/img/Icons/linkedin.svg"

export const Footer = () => {
    return (
        <footer className='pt-15 pb-10'>
            <div className='md:hidden'>
                <ul className='flex justify-center items-center m-0 p-0 gap-5'>
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
                                className="w-5 h-5 md:w-6 md:h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                            />
                        </a>
                    </li>

                    <li className="group navLink">
                        <a
                            href="https://linkedin.com/in/tu-perfil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                        >
                            <img
                                src={LinkedIn}
                                alt="Perfil LinkedIn"
                                className="w-5 h-5 md:w-6 md:h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                            />
                        </a>
                    </li>

                    <li className="group navMail">
                        <a
                            href="mailto:tu-email@example.com"
                            className="block p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                        >
                            <img
                                src={Mail}
                                alt="Mandar Email"
                                className="w-5 h-5 md:w-6 md:h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <a href='https://github.com/Kvr0th3c4t' target='_blanck' rel='noopener noreferrer' className=''>
                <p className="text-center text-neutral-400 font-['Syne'] text-lg mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-5 hover:text-blue-400">Web diseñada y desarrollada por Adrián Carmona</p></a>

        </footer >
    )
}
