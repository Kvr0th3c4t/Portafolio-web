import React from 'react'
import yo from "../../../src/assets/img/Yo.webp"
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

                <div className='xl:col-span-2 xl:order-1 xl:mt-10'>
                    <div className='sobreMiText mb-6 sm:mb-8'>
                        <p className="mb-5 sm:mb-4 md:mb-2 xl:mb-5 text-neutral-400 font-['Syne'] text-base sm:text-base md:text-lg xl:text-lg">
                            En 2018 terminé la carrera de <span className="text-blue-400">Criminología</span> y descubrí el mundo del hacking. Me llamó especialmente la atención el <span className="text-blue-400">hacking web</span>. Como no tenía conocimientos de programación, estudié <span className="text-blue-400">Desarrollo de Aplicaciones Web</span> para así poder comprender como funciona el entorno completo.
                        </p>
                        <p className="mb-3 sm:mb-4 md:mb-2 xl:mb-5 text-neutral-400 font-['Syne'] text-base sm:text-base md:text-lg xl:text-lg">
                            Actualmente trabajo con el stack de Microsoft (.NET, C#) y exploro Azure Cloud. Este está me está permitiendo desarrollar aplicaciones a <span className="text-blue-400">nivel empresarial</span>, sin desmarcarme de mi objetivo principal que es <span className="text-blue-400">el desarrollo de videojuegos</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}