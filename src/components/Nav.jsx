
import profile from "../../src/assets/img/Profile.png"
import { Button } from "./Button"

export const Nav = () => {

    return (
        <nav className="flex flex-row justify-between items-center px-20 py-10 mx-auto opacity-100">
            <a className="p-1" href="/">
                <img src={profile} alt="test" className="w-14 h-14 rounded-full border border-blue-400" />
            </a>
            <div className="hidden lg:block">
                <ul className="flex flex-col justify-center mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center 
                        lg:gap-4 xl:gap-6 2xl:gap-8">
                    <li className="flex items-center p-1 text-neutral-200 hover:text-blue-400">
                        <a href="">Sobre mí</a>
                    </li>
                    <li className="flex items-center p-1 text-neutral-200 hover:text-blue-400">
                        <a href="">Proyectos</a>
                    </li>
                    <li className="flex items-center p-1 text-neutral-200 hover:text-blue-400">
                        <a href="">Contacto</a>
                    </li>
                    <li className="flex items-center p-1 text-neutral-200">
                        <Button text="Curriculum"></Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}