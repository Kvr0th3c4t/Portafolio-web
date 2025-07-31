import React from 'react'
import { Button } from '../UI/Button'
import Kuro from "../../../src/assets/img/Kuro.jpg"

export const Contacto = () => {
    return (
        <section className='px-50 py-15 w-full min-h-screen' id="contacto">
            <h2 className="text-neutral-200 text-3xl font-extrabold font-['Syne'] mb-10">
                <span className="text-blue-400 font-extrabold mb-5">III. </span>Contacto
            </h2>
            <div className='grid grid-cols-3 gap-10'>
                <div>
                    <img src={Kuro} alt="Gato negro 'Kuro'" className='rounded-lg' />
                </div>
                <div className='flex flex-col justify-center items-center col-span-2'>
                    <h1 className="text-blue-400 text-7xl font-extrabold font-['Syne'] mb-2">¡Este es Kuro!</h1>
                    <h3 className="text-neutral-200 text-4xl font-extrabold font-['Syne'] mb-10">Y es mi gato. De ahí mi apodo "Kvr0th3c4t".</h3>

                    <p className="mb-20 text-neutral-400 font-['Syne'] text-lg">Le encanta el atún caro. Necesito empezar a trabajar en proyectos para financiar sus caprichos. Tú necesitas un desarrollador competente. Contacta conmigo. Hagamos un proyecto que beneficie a ambas partes (y a un gato muy exigente).</p>

                    <Button text="Contacto" href="mailto:adrianc.crim@hotmail.com" className='py-3 px-15'></Button>
                </div>
            </div>

        </section>
    )
}
