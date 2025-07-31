import { useState } from 'react'
import profile from "../../../src/assets/img/Profile.png"
import { Button } from "../UI/Button"
import CV from "../../../src/assets/docs/AdrianCC_CV.pdf"
import { useFadeIn } from "../../hooks/useFadeIn"

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const ref = useFadeIn([
        ".navLogo",
        ".navSobreMi",
        ".navProyectos",
        ".navContacto",
        ".navCv"],
        0.5,
        0.5,
        0.25)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="flex flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-20 py-6 sm:py-8 md:py-9 lg:py-10 xl:py-10 mx-auto opacity-100 relative z-50" ref={ref}>
            <a className="navLogo p-1" href="/">
                <img src={profile} alt="Adrian Carmona" className="w-12 h-12 sm:w-13 md:w-14 lg:w-14 xl:w-14 rounded-full border border-blue-400" />
            </a>

            <button
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-neutral-200 transition-all duration-500 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-neutral-200 transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-neutral-200 transition-all duration-500 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            <div className="hidden lg:block">
                <ul className="flex flex-col justify-center mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 xl:gap-6 2xl:gap-8">
                    <li className="navSobreMi flex items-center p-1 text-neutral-200 hover:text-blue-400 transition-colors duration-300">
                        <a href="#sobreMi">Sobre mí</a>
                    </li>
                    <li className="navProyectos flex items-center p-1 text-neutral-200 hover:text-blue-400 transition-colors duration-300">
                        <a href="#proyectos">Proyectos</a>
                    </li>
                    <li className="navContacto flex items-center p-1 text-neutral-200 hover:text-blue-400 transition-colors duration-300">
                        <a href="#contacto">Contacto</a>
                    </li>
                    <li className="navCv flex items-center p-1 text-neutral-200">
                        <Button text="Curriculum" href={CV} target="_blank"></Button>
                    </li>
                </ul>
            </div>

            <div
                className={`lg:hidden fixed top-0 left-0 w-full h-full z-30 transition-all duration-500 ease-out ${isMenuOpen ? 'bg-black/50 opacity-100' : 'bg-black/0 opacity-0 pointer-events-none'}`}
                onClick={closeMenu}
            />
            <div className={`lg:hidden absolute top-full left-0 right-0 bg-neutral-900/98 backdrop-blur-md border-t border-neutral-700 shadow-2xl z-40 transform transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
                <ul className="flex flex-col py-6 px-4 space-y-1 justify-center items-center">
                    <li className={`flex items-center transition-all duration-300 ease-out ${isMenuOpen ? 'delay-100' : 'delay-0'}`}>
                        <a
                            href="#sobreMi"
                            className="block w-full p-4 text-neutral-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-xl transition-all duration-300 ease-out"
                            onClick={closeMenu}
                        >
                            Sobre mí
                        </a>
                    </li>
                    <li className={`flex items-center transition-all duration-300 ease-out ${isMenuOpen ? 'delay-150' : 'delay-0'}`}>
                        <a
                            href="#proyectos"
                            className="block w-full p-4 text-neutral-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-xl transition-all duration-300 ease-out"
                            onClick={closeMenu}
                        >
                            Proyectos
                        </a>
                    </li>
                    <li className={`flex items-center transition-all duration-300 ease-out ${isMenuOpen ? 'delay-200' : 'delay-0'}`}>
                        <a
                            href="#contacto"
                            className="block w-full p-4 text-neutral-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-xl transition-all duration-300 ease-out"
                            onClick={closeMenu}
                        >
                            Contacto
                        </a>
                    </li>
                    <li className={`flex items-center pt-3 transition-all duration-300 ease-out ${isMenuOpen ? 'delay-300' : 'delay-0'}`}>
                        <div className="w-full">
                            <Button
                                text="Curriculum"
                                href={CV}
                                target="_blank"
                                className="w-full justify-center"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}