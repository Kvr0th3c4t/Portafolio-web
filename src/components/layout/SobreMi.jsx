import React from 'react'
import yo from "../../../src/assets/img/Yo.png"
import { useScrollTrigger } from '../../hooks/useScrollTrigger'

export const SobreMi = () => {

    const ref = useScrollTrigger(["sobreMiTitle", "sobreMiText", "sobreMiList"])

    return (
        <section className='px-50 py-15 w-full min-h-screen' id='sobreMi' ref={ref}>
            <h2 className="sobreMiTitle text-neutral-200 text-3xl font-extrabold font-['Syne'] mb-10">
                <span className="text-blue-400 font-extrabold mb-5">I. </span>Sobre mi
            </h2>
            <div className='grid grid-cols-3 gap-20'>
                <div className='col-span-2'>
                    <div className='sobreMiText'>
                        <p className="mb-2 text-neutral-400 font-['Syne'] text-lg">
                            Mi nombre es Adrián Carmona y soy desarrollador web. En 2018 terminé la carrera de <span className="text-blue-400">Criminología</span> y descubrí el mundo del hacking. En especial, me llamó la atención el <span className="text-blue-400">hacking web</span>, pero como no tenía conocimientos previos en programación, decidí estudiar <span className="text-blue-400">Desarrollo de Aplicaciones Web</span> para entender el entorno al completo.
                        </p>
                        <p className="mb-2 text-neutral-400 font-['Syne'] text-lg">
                            A día de hoy, sigo interesado tanto en el hacking web como en el desarrollo web. Me encanta la tecnología espacial y el diseño UI/UX, aunque no tengo formación en este campo. Por eso, uno de mis referentes es Shane Mielke, por cómo combina el desarrollo web con interfaces visuales y por su trabajo en proyectos como SpaceX.
                        </p>
                        <p className="mb-8 text-neutral-400 font-['Syne'] text-lg">
                            Estas son algunas de las tecnologías en las que estoy trabajando recientemente.
                        </p>
                    </div>
                    <div className='sobreMiList'>
                        <ul className='grid grid-cols-2 gap-2'>
                            <li className="text-neutral-400 font-['Syne'] font-bold text-lg"> <span className='text-blue-400 pr-1'>• </span>React</li>
                            <li className="text-neutral-400 font-['Syne'] font-bold text-lg"> <span className='text-blue-400 pr-1'>• </span>Astro</li>
                            <li className="text-neutral-400 font-['Syne'] font-bold text-lg"> <span className='text-blue-400 pr-1'>• </span>Tailwind</li>
                            <li className="text-neutral-400 font-['Syne'] font-bold text-lg"> <span className='text-blue-400 pr-1'>• </span>Node.Js</li>
                        </ul>
                    </div>

                </div>
                <div className='sobreMiImg relative'>
                    <img src={yo} alt="Adrian Carmona" className='w-64 rounded-2xl mask-radial-[100%_100%] mask-radial-from-55% mask-radial-at-top backdrop-blur-xl' />
                </div>
            </div>
        </section >
    )
}
