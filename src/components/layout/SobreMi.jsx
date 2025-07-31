import React from 'react'
import yo from "../../../src/assets/img/Yo.png"
import { useScrollTrigger } from '../../hooks/useScrollTrigger'

export const SobreMi = () => {
    const ref = useScrollTrigger(["sobreMiTitle", "sobreMiText", "sobreMiList", "sobreMiImg"])

    return (
        <section className='px-4 sm:px-8 md:px-20 lg:px-40 xl:px-50 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-15 w-full min-h-screen' id='sobreMi' ref={ref}>
            <h2 className="sobreMiTitle text-neutral-200 text-2xl sm:text-2xl md:text-3xl xl:text-3xl font-extrabold font-['Syne'] mb-6 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-10">
                <span className="text-blue-400 font-extrabold mb-5">I. </span>Sobre mi
            </h2>

            <div className='flex flex-col xl:grid xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-20'>

                <div className='sobreMiImg relative flex justify-center xl:justify-start xl:col-span-1 xl:order-2'>
                    <img
                        src={yo}
                        alt="Adrian Carmona"
                        className='w-56 sm:w-64 md:w-72 lg:w-80 xl:w-64 rounded-2xl mask-radial-[100%_100%] mask-radial-from-55% mask-radial-at-top backdrop-blur-xl object-cover'
                    />
                </div>

                <div className='xl:col-span-2 xl:order-1'>
                    <div className='sobreMiText mb-6 sm:mb-8'>
                        <p className="mb-3 sm:mb-4 md:mb-2 xl:mb-2 text-neutral-400 font-['Syne'] text-base sm:text-base md:text-lg xl:text-lg">
                            Mi nombre es Adrián Carmona y soy desarrollador web. En 2018 terminé la carrera de <span className="text-blue-400">Criminología</span> y descubrí el mundo del hacking. En especial, me llamó la atención el <span className="text-blue-400">hacking web</span>, pero como no tenía conocimientos previos en programación, decidí estudiar <span className="text-blue-400">Desarrollo de Aplicaciones Web</span> para entender el entorno al completo.
                        </p>
                        <p className="mb-3 sm:mb-4 md:mb-2 xl:mb-2 text-neutral-400 font-['Syne'] text-base sm:text-base md:text-lg xl:text-lg">
                            A día de hoy, sigo interesado tanto en el hacking web como en el desarrollo web. Me encanta la tecnología espacial y el diseño UI/UX, aunque no tengo formación en este campo. Por eso, uno de mis referentes es Shane Mielke, por cómo combina el desarrollo web con interfaces visuales y por su trabajo en proyectos como SpaceX.
                        </p>
                        <p className="mb-6 sm:mb-6 md:mb-8 xl:mb-8 text-neutral-400 font-['Syne'] text-base sm:text-base md:text-lg xl:text-lg">
                            Estas son algunas de las tecnologías en las que estoy trabajando recientemente.
                        </p>
                    </div>

                    <div className='sobreMiList'>
                        <ul className='grid grid-cols-2 gap-2 xl:gap-2'>
                            <li className="text-neutral-400 font-['Syne'] font-bold text-base sm:text-base md:text-lg xl:text-lg">
                                <span className='text-blue-400 pr-2'>• </span>React
                            </li>
                            <li className="text-neutral-400 font-['Syne'] font-bold text-base sm:text-base md:text-lg xl:text-lg">
                                <span className='text-blue-400 pr-2'>• </span>Astro
                            </li>
                            <li className="text-neutral-400 font-['Syne'] font-bold text-base sm:text-base md:text-lg xl:text-lg">
                                <span className='text-blue-400 pr-2'>• </span>Tailwind
                            </li>
                            <li className="text-neutral-400 font-['Syne'] font-bold text-base sm:text-base md:text-lg xl:text-lg">
                                <span className='text-blue-400 pr-2'>• </span>Node.Js
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}