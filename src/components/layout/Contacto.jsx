import React from 'react'
import { Button } from '../UI/Button'
import Kuro from "../../../src/assets/img/Kuro.jpg"
import { useScrollTrigger } from '../../hooks/useScrollTrigger'

export const Contacto = () => {
    const ref = useScrollTrigger(["contactTitle", "contactImage", "contactContent"])

    return (
        <section className='px-4 sm:px-8 md:px-20 lg:px-40 xl:px-50 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-15 w-full min-h-screen' id="contacto" ref={ref}>
            <h2 className="contactTitle text-neutral-200 text-2xl sm:text-2xl md:text-3xl xl:text-3xl font-extrabold font-['Syne'] mb-6 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-10">
                <span className="text-blue-400 font-extrabold mb-5">III. </span>Contacto
            </h2>

            {/* Responsive Layout: Stack vertical hasta lg, Grid en xl */}
            <div className='flex flex-col xl:grid xl:grid-cols-3 gap-8 sm:gap-9 md:gap-10 xl:gap-10'>

                {/* Image Section */}
                <div className="contactImage flex justify-center xl:justify-start xl:col-span-1">
                    <img
                        src={Kuro}
                        alt="Gato negro 'Kuro'"
                        className='w-64 sm:w-72 md:w-80 lg:w-96 xl:w-full rounded-lg object-cover'
                    />
                </div>

                {/* Content Section */}
                <div className='contactContent flex flex-col justify-center items-center xl:col-span-2 text-center xl:text-left'>
                    <h1 className="text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-['Syne'] mb-3 sm:mb-3 md:mb-2 xl:mb-2">
                        ¡Este es Kuro!
                    </h1>
                    <h3 className="text-neutral-200 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold font-['Syne'] mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10">
                        Y es mi gato. De ahí mi apodo "Kvr0th3c4t".
                    </h3>

                    <p className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 text-neutral-400 font-['Syne'] text-base sm:text-base md:text-lg xl:text-lg max-w-2xl xl:max-w-none">
                        Le encanta el atún caro. Necesito empezar a trabajar en proyectos para financiar sus caprichos. Tú necesitas un desarrollador competente. Contacta conmigo. Hagamos un proyecto que beneficie a ambas partes (y a un gato muy exigente).
                    </p>

                    <Button
                        text="Contacto"
                        href="mailto:adrianc.crim@hotmail.com"
                        className='py-3 px-8 sm:px-10 md:px-12 lg:px-14 xl:px-15 text-base sm:text-base md:text-lg'
                    />
                </div>
            </div>
        </section>
    )
}