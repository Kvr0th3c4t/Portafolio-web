
import profile from "../../../src/assets/img/Profile.png"
import { Button } from "../UI/Button"
import CV from "../../../src/assets/docs/AdrianCC_CV.pdf"
import gsap from "gsap"
import { useEffect } from "react"
import { useRef } from "react"

export const Nav = () => {
    const navRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo([
                ".navLogo",
                ".navSobreMi",
                ".navProyectos",
                ".navContacto",
                ".navCv"
            ],
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    delay: 0,
                    duration: 0.5,
                    stagger: 0.25,
                    ease: "power2.out"
                })
        }, navRef)

        return () => ctx.revert()
    }, [])

    return (
        <nav className="flex flex-row justify-between items-center px-20 py-10 mx-auto opacity-100" ref={navRef}>
            <a className="navLogo p-1" href="/">
                <img src={profile} alt="test" className="w-14 h-14 rounded-full border border-blue-400" />
            </a>
            <div className="hidden lg:block">
                <ul className="flex flex-col justify-center mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center 
                        lg:gap-4 xl:gap-6 2xl:gap-8">
                    <li className="navSobreMi flex items-center p-1 text-neutral-200 hover:text-blue-400">
                        <a href="#sobreMi">Sobre mí</a>
                    </li>
                    <li className="navProyectos flex items-center p-1 text-neutral-200 hover:text-blue-400">
                        <a href="#proyectos">Proyectos</a>
                    </li>
                    <li className="navContacto flex items-center p-1 text-neutral-200 hover:text-blue-400">
                        <a href="#contacto">Contacto</a>
                    </li>
                    <li className="navCv flex items-center p-1 text-neutral-200">
                        <Button text="Curriculum" href={CV} target="_blanck"></Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}