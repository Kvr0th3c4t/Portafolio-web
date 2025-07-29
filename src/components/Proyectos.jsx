import React from 'react'
import PinneHopper from "../../src/assets/img/PinneHopper.png"

export const Proyectos = () => {
    return (
        <section className='px-80 py-15 w-full min-h-[500px]'>
            <h2 className="text-neutral-200 text-3xl font-extrabold font-['Syne'] mb-10">
                <span className="text-blue-400 font-extrabold mb-5">II. </span>Proyectos
            </h2>
            <div>
                <ul>
                    <li className='grid grid-cols-2 gap-5'>
                        <div className='w-full h-full'>
                            <img
                                src={PinneHopper}
                                alt=""
                                className='object-cover object-center'
                            />
                        </div>
                        <div>
                            <h3 className="text-neutral-200 text-2xl font-extrabold font-['Syne'] mb-2 text-right">Juego web con Phaser y Angular</h3>
                            <div className='bg-neutral-900 mb-5 rounded-lg p-5 opacity-95'>
                                <p className="text-neutral-400 font-['RedHat'] text-right ">Desarrollo de un videojuego utilizando el motor gráfico Phaser, integrado dentro de una aplicación web moderna construida con Angular. Se combina la potencia del framework Angular para la gestión de la aplicación y la interfaz de usuario, con las capacidades avanzadas de Phaser para crear experiencias de juego interactivas y dinámicas.</p>
                            </div>
                            <div className='flex justify-end mb-5'>
                                <span className='rounded-lg px-2 py-1 me-2 bg-amber-300 text-xs'>tecnologias</span>
                                <span className='rounded-lg px-2 py-1 me-2 bg-amber-300 text-xs'>tecnologias</span>
                                <span className='rounded-lg px-2 py-1 me-2 bg-amber-300 text-xs'>tecnologias</span>
                                <span className='rounded-lg px-2 py-1 bg-amber-300 text-xs'>tecnologias</span>
                            </div>
                            <nav className='flex justify-end'>
                                <div>
                                    <a>
                                        <img src="https://placehold.co/36x36" alt="" className='pe-2' />
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img src="https://placehold.co/36x36" alt="" />
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </li>
                    <li>
                        <div></div>
                        <div></div>
                    </li>
                    <li>
                        <div></div>
                        <div></div>
                    </li>
                </ul>
            </div>

        </section >
    )
}
