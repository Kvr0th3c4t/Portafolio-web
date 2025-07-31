import React from 'react'
import PinneHopper from "../../../src/assets/img/PinneHopper.png"
import Innovatech from "../../../src/assets/img/Innovatech.png"
import Github from "../../../src/assets/img/Icons/github.svg"
import SpaceX from "../../../src/assets/img/spacexinfo.png"
import External from "../../../src/assets/img/Icons/external.svg"
import { Badges } from '../UI/Badges'
import { useScrollTrigger } from '../../hooks/useScrollTrigger'

export const Proyectos = () => {
    const ref = useScrollTrigger(["projectsTitle", "projectItem1", "projectItem2", "projectItem3"])

    return (
        <section className='px-4 sm:px-8 md:px-20 lg:px-40 xl:px-50 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-15 w-full min-h-screen' id='proyectos' ref={ref}>
            <h2 className="projectsTitle text-neutral-200 text-2xl sm:text-2xl md:text-3xl xl:text-3xl font-extrabold font-['Syne'] mb-6 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-10">
                <span className="text-blue-400 font-extrabold mb-5">II. </span>Proyectos principales
            </h2>
            <div>
                <ul className='space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-18 xl:space-y-20'>

                    {/* Proyecto 1 - PineHopper */}
                    <li className='projectItem1'>
                        {/* Mobile: Stack vertical */}
                        <div className='flex flex-col xl:hidden gap-6'>
                            <div className='w-full'>
                                <img
                                    src={PinneHopper}
                                    alt="PineHopper - Juego web"
                                    className='w-full h-48 sm:h-56 md:h-64 object-cover object-center rounded-lg'
                                />
                            </div>
                            <div className='text-center'>
                                <h2 className="text-blue-400 text-2xl sm:text-2xl md:text-3xl font-['Syne'] font-extrabold uppercase mb-2">Pinehopper.</h2>
                                <h3 className="text-neutral-200 text-xl sm:text-xl md:text-2xl font-['Syne'] mb-4">
                                    Juego web con Phaser y Angular
                                </h3>
                                <div className='mb-6'>
                                    <p className="text-neutral-400 font-['RedHat'] text-sm sm:text-base">Desarrollo de un videojuego utilizando el motor gráfico Phaser, integrado dentro de una aplicación web moderna construida con Angular. Se combina la potencia del framework Angular para la gestión de la aplicación y la interfaz de usuario, con las capacidades avanzadas de Phaser para crear experiencias de juego interactivas y dinámicas.</p>
                                </div>
                                <div className='flex flex-wrap gap-2 mb-5 justify-center'>
                                    <Badges type="Angular" />
                                    <Badges type="JavaScript" />
                                    <Badges type="Bootstrap" />
                                    <Badges type="NodeJS" />
                                    <Badges type="TypeScript" />
                                    <Badges type="Phaser" />
                                    <Badges type="HTML" />
                                    <Badges type="CSS" />
                                </div>
                                <nav className='flex justify-center gap-4'>
                                    <a href='https://github.com/Kvr0th3c4t/PineHopper' target='_blank' rel='noopener noreferrer'>
                                        <img src={Github} alt="GitHub" className="w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-300" />
                                    </a>
                                    <a href='https://tfgv2.adriancc.com/' target='_blank' rel='noopener noreferrer'>
                                        <img src={External} alt="Live Demo" className="w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-300" />
                                    </a>
                                </nav>
                            </div>
                        </div>

                        {/* Desktop XL: Grid original */}
                        <div className='hidden xl:grid xl:grid-cols-2 xl:gap-5'>
                            <div className='w-full h-full'>
                                <img
                                    src={PinneHopper}
                                    alt="PineHopper - Juego web"
                                    className='object-cover object-center rounded-lg'
                                />
                            </div>
                            <div>
                                <h2 className="text-blue-400 text-3xl text-right font-['Syne'] font-extrabold uppercase mb-1">Pinehopper.</h2>
                                <h3 className="text-neutral-200 text-2xl font-['Syne'] mb-5 text-right">
                                    Juego web con Phaser y Angular
                                </h3>
                                <div className='mb-10'>
                                    <p className="text-neutral-400 font-['RedHat'] text-right">Desarrollo de un videojuego utilizando el motor gráfico Phaser, integrado dentro de una aplicación web moderna construida con Angular. Se combina la potencia del framework Angular para la gestión de la aplicación y la interfaz de usuario, con las capacidades avanzadas de Phaser para crear experiencias de juego interactivas y dinámicas.</p>
                                </div>
                                <div className='flex flex-wrap gap-2 mb-5 justify-end'>
                                    <Badges type="Angular" />
                                    <Badges type="JavaScript" />
                                    <Badges type="Bootstrap" />
                                    <Badges type="NodeJS" />
                                    <Badges type="TypeScript" />
                                    <Badges type="Phaser" />
                                    <Badges type="HTML" />
                                    <Badges type="CSS" />
                                </div>
                                <nav className='flex justify-end gap-5'>
                                    <a href='https://github.com/Kvr0th3c4t/PineHopper' target='_blank' rel='noopener noreferrer'>
                                        <img src={Github} alt="GitHub" className="w-8 h-8" />
                                    </a>
                                    <a href='https://tfgv2.adriancc.com/' target='_blank' rel='noopener noreferrer'>
                                        <img src={External} alt="Live Demo" className="w-8 h-8" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </li>

                    {/* Proyecto 2 - Innovatech */}
                    <li className='projectItem2'>
                        {/* Mobile: Stack vertical */}
                        <div className='flex flex-col xl:hidden gap-6'>
                            <div className='w-full'>
                                <img
                                    src={Innovatech}
                                    alt="Innovatech - Sistema de gestión"
                                    className='w-full h-48 sm:h-56 md:h-64 object-cover object-center rounded-lg'
                                />
                            </div>
                            <div className='text-center'>
                                <h2 className="text-blue-400 text-2xl sm:text-2xl md:text-3xl font-['Syne'] font-extrabold uppercase mb-2">Innovatech.</h2>
                                <h3 className="text-neutral-200 text-xl sm:text-xl md:text-2xl font-['Syne'] mb-4">Sistema de gestión de vacantes de empleo</h3>
                                <div className='mb-6'>
                                    <p className="text-neutral-400 font-['RedHat'] text-sm sm:text-base">Interfaz web moderna y responsive para el sistema de gestión de vacantes de empleo. Desarrollada con Angular 18, proporciona una experiencia de usuario intuitiva y completa para administradores, empresas y candidatos. Integra completamente con la API REST del backend para ofrecer funcionalidades completas de gestión de empleos.</p>
                                </div>
                                <div className='flex flex-wrap gap-2 mb-5 justify-center'>
                                    <Badges type="Angular" />
                                    <Badges type="JavaScript" />
                                    <Badges type="Bootstrap" />
                                    <Badges type="NodeJS" />
                                    <Badges type="TypeScript" />
                                    <Badges type="HTML" />
                                    <Badges type="CSS" />
                                    <Badges type="Spring" />
                                    <Badges type="MySql" />
                                    <Badges type="Java" />
                                </div>
                                <nav className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <span className="text-neutral-400 font-['RedHat'] text-sm">Front-End:</span>
                                        <a href='https://github.com/Kvr0th3c4t/VacantesFront' target='_blank' rel='noopener noreferrer'>
                                            <img src={Github} alt="Frontend GitHub" className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className="text-neutral-400 font-['RedHat'] text-sm">Back-End:</span>
                                        <a href='https://github.com/Kvr0th3c4t/VacantesRetoBack' target='_blank' rel='noopener noreferrer'>
                                            <img src={Github} alt="Backend GitHub" className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
                                        </a>
                                    </div>
                                    <a href='https://vacantes.adriancc.com/' target='_blank' rel='noopener noreferrer'>
                                        <img src={External} alt="Live Demo" className="w-7 h-7 hover:scale-110 transition-transform duration-300" />
                                    </a>
                                </nav>
                            </div>
                        </div>

                        {/* Desktop XL: Grid original */}
                        <div className='hidden xl:grid xl:grid-cols-2 xl:gap-5'>
                            <div>
                                <h2 className="text-blue-400 text-3xl font-['Syne'] font-extrabold uppercase mb-1">Innovatech.</h2>
                                <h3 className="text-neutral-200 text-2xl font-['Syne'] mb-5">Sistema de gestión de vacantes de empleo</h3>
                                <div className='mb-10'>
                                    <p className="text-neutral-400 font-['RedHat']">Interfaz web moderna y responsive para el sistema de gestión de vacantes de empleo. Desarrollada con Angular 18, proporciona una experiencia de usuario intuitiva y completa para administradores, empresas y candidatos. Integra completamente con la API REST del backend para ofrecer funcionalidades completas de gestión de empleos.</p>
                                </div>
                                <div className='flex flex-wrap gap-2 mb-5'>
                                    <Badges type="Angular" />
                                    <Badges type="JavaScript" />
                                    <Badges type="Bootstrap" />
                                    <Badges type="NodeJS" />
                                    <Badges type="TypeScript" />
                                    <Badges type="HTML" />
                                    <Badges type="CSS" />
                                    <Badges type="Spring" />
                                    <Badges type="MySql" />
                                    <Badges type="Java" />
                                </div>
                                <nav className='flex gap-5'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <h3 className="text-neutral-400 font-['RedHat']">Front-End:</h3>
                                        <a href='https://github.com/Kvr0th3c4t/VacantesFront' target='_blank' rel='noopener noreferrer'>
                                            <img src={Github} alt="Frontend GitHub" className="w-8 h-8" />
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <h3 className="text-neutral-400 font-['RedHat']">Back-End:</h3>
                                        <a href='https://github.com/Kvr0th3c4t/VacantesRetoBack' target='_blank' rel='noopener noreferrer'>
                                            <img src={Github} alt="Backend GitHub" className="w-8 h-8" />
                                        </a>
                                    </div>
                                    <a href='https://vacantes.adriancc.com/' target='_blank' rel='noopener noreferrer'>
                                        <img src={External} alt="Live Demo" className="w-8 h-8" />
                                    </a>
                                </nav>
                            </div>
                            <div className='w-full h-full'>
                                <img
                                    src={Innovatech}
                                    alt="Innovatech - Sistema de gestión"
                                    className='object-cover object-center rounded-lg'
                                />
                            </div>
                        </div>
                    </li>

                    {/* Proyecto 3 - SpaceX */}
                    <li className='projectItem3'>
                        {/* Mobile: Stack vertical */}
                        <div className='flex flex-col xl:hidden gap-6'>
                            <div className='w-full'>
                                <img
                                    src={SpaceX}
                                    alt="SpaceX-INFO - Datos oficiales"
                                    className='w-full h-48 sm:h-56 md:h-64 object-cover object-center rounded-lg'
                                />
                            </div>
                            <div className='text-center'>
                                <h2 className="text-blue-400 text-2xl sm:text-2xl md:text-3xl font-['Syne'] font-extrabold uppercase mb-2">SpaceX-INFO.</h2>
                                <h3 className="text-neutral-200 text-xl sm:text-xl md:text-2xl font-['Syne'] mb-4">
                                    Datos oficiales de SpaceX desde TheSpaceDevs API
                                </h3>
                                <div className='mb-6'>
                                    <p className="text-neutral-400 font-['RedHat'] text-sm sm:text-base">SpaceXINFO es una aplicación web de información general sobre proyectos de SpaceX. Recopila información oficial desde la API de TheSpaceDevs y presenta datos detallados sobre lanzamientos, aeronaves, lanzadores y tripulación de SpaceX de manera organizada y visual.</p>
                                </div>
                                <div className='flex flex-wrap gap-2 mb-5 justify-center'>
                                    <Badges type="HTML" />
                                    <Badges type="CSS" />
                                    <Badges type="JavaScript" />
                                    <Badges type="React" />
                                    <Badges type="TypeScript" />
                                    <Badges type="Vite" />
                                    <Badges type="Tailwind" />
                                </div>
                                <nav className='flex justify-center gap-4'>
                                    <a href='https://github.com/Kvr0th3c4t/spaceXINFO' target='_blank' rel='noopener noreferrer'>
                                        <img src={Github} alt="GitHub" className="w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-300" />
                                    </a>
                                    <a href='https://spacexinfo.adriancc.com/' target='_blank' rel='noopener noreferrer'>
                                        <img src={External} alt="Live Demo" className="w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-300" />
                                    </a>
                                </nav>
                            </div>
                        </div>

                        {/* Desktop XL: Grid original */}
                        <div className='hidden xl:grid xl:grid-cols-2 xl:gap-5'>
                            <div className='w-full h-full'>
                                <img
                                    src={SpaceX}
                                    alt="SpaceX-INFO - Datos oficiales"
                                    className='object-cover object-center rounded-lg'
                                />
                            </div>
                            <div>
                                <h2 className="text-blue-400 text-3xl text-right font-['Syne'] font-extrabold uppercase mb-1">SpaceX-INFO.</h2>
                                <h3 className="text-neutral-200 text-2xl font-['Syne'] mb-5 text-right">
                                    Datos oficiales de SpaceX desde TheSpaceDevs API
                                </h3>
                                <div className='mb-10'>
                                    <p className="text-neutral-400 font-['RedHat'] text-right">SpaceXINFO es una aplicación web de información general sobre proyectos de SpaceX. Recopila información oficial desde la API de TheSpaceDevs y presenta datos detallados sobre lanzamientos, aeronaves, lanzadores y tripulación de SpaceX de manera organizada y visual.</p>
                                </div>
                                <div className='flex flex-wrap gap-2 mb-5 justify-end'>
                                    <Badges type="HTML" />
                                    <Badges type="CSS" />
                                    <Badges type="JavaScript" />
                                    <Badges type="React" />
                                    <Badges type="TypeScript" />
                                    <Badges type="Vite" />
                                    <Badges type="Tailwind" />
                                </div>
                                <nav className='flex justify-end gap-5'>
                                    <a href='https://github.com/Kvr0th3c4t/spaceXINFO' target='_blank' rel='noopener noreferrer'>
                                        <img src={Github} alt="GitHub" className="w-8 h-8" />
                                    </a>
                                    <a href='https://spacexinfo.adriancc.com/' target='_blank' rel='noopener noreferrer'>
                                        <img src={External} alt="Live Demo" className="w-8 h-8" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}