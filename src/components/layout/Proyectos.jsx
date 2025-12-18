import React from 'react'
import PinneHopper from "../../../src/assets/img/PinneHopper.webp"
import Innovatech from "../../../src/assets/img/Innovatech.webp"
import Github from "../../../src/assets/img/Icons/github.svg"
import SpaceX from "../../../src/assets/img/spacexinfo.webp"
import External from "../../../src/assets/img/Icons/external.svg"
import InventoryAPI from "../../../src/assets/img/InventoryAPI.webp"

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

                    {/* Proyecto 1: PineHopper */}
                    <li className='projectItem1'>
                        <div className='flex flex-col xl:grid xl:grid-cols-2 gap-6 xl:gap-5'>
                            <div className='w-full xl:h-full'>
                                <img
                                    src={PinneHopper}
                                    alt="PineHopper - Juego web"
                                    className='w-full h-48 sm:h-56 md:h-64 xl:h-full object-cover object-center rounded-lg'
                                />
                            </div>
                            <div className='text-center xl:text-right'>
                                <h2 className="text-blue-400 text-2xl sm:text-2xl md:text-3xl xl:text-3xl font-['Syne'] font-extrabold uppercase mb-2 xl:mb-1">
                                    Pinehopper.
                                </h2>
                                <h3 className="text-neutral-200 text-xl sm:text-xl md:text-2xl xl:text-2xl font-['Syne'] mb-4 xl:mb-5">
                                    Juego web con Phaser y Angular
                                </h3>
                                <div className='mb-6 xl:mb-10'>
                                    <p className="text-neutral-400 font-['RedHat'] text-sm sm:text-base xl:text-base">
                                        Desarrollo de un videojuego utilizando el motor gráfico Phaser, integrado dentro de una aplicación web moderna construida con Angular. Se combina la potencia del framework Angular para la gestión de la aplicación y la interfaz de usuario, con las capacidades avanzadas de Phaser para crear experiencias de juego interactivas y dinámicas.
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-2 mb-5 justify-center xl:justify-end'>
                                    <Badges type="Angular" />
                                    <Badges type="JavaScript" />
                                    <Badges type="Bootstrap" />
                                    <Badges type="NodeJS" />
                                    <Badges type="TypeScript" />
                                    <Badges type="Phaser" />
                                    <Badges type="HTML" />
                                    <Badges type="CSS" />
                                </div>
                                <nav className='flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 xl:gap-5'>
                                    <span className="text-neutral-400 font-['RedHat'] text-sm xl:text-base">Repo:</span>
                                    <a href='https://github.com/Kvr0th3c4t/PineHopper' target='_blank' rel='noopener noreferrer'>
                                        <img src={Github} alt="GitHub" className="w-6 h-6 xl:w-8 xl:h-8 hover:scale-110 transition-transform duration-300" />
                                    </a>
                                    <span className="text-neutral-400 font-['RedHat'] text-sm xl:text-base">Demo:</span>
                                    <a href='https://pinehopper.adriancc.com/' target='_blank' rel='noopener noreferrer'>
                                        <img src={External} alt="Live Demo" className="w-6 h-6 xl:w-8 xl:h-8 hover:scale-110 transition-transform duration-300" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </li>

                    {/* Proyecto 2: Innovatech */}
                    <li className='projectItem2'>
                        <div className='flex flex-col xl:grid xl:grid-cols-2 gap-6 xl:gap-5'>
                            <div className='w-full xl:h-full order-1 xl:order-2'>
                                <img
                                    src={InventoryAPI}
                                    alt="Innovatech - Sistema de gestión"
                                    className='w-full h-48 sm:h-56 md:h-64 xl:h-full object-cover object-center rounded-lg'
                                />
                            </div>
                            <div className='text-center xl:text-left order-2 xl:order-1'>
                                <h2 className="text-blue-400 text-2xl sm:text-2xl md:text-3xl xl:text-3xl font-['Syne'] font-extrabold uppercase mb-2 xl:mb-1">
                                    Inventory-API
                                </h2>
                                <h3 className="text-neutral-200 text-xl sm:text-xl md:text-2xl xl:text-2xl font-['Syne'] mb-4 xl:mb-5">
                                    Sistema de gestión de stocks
                                </h3>
                                <div className='mb-6 xl:mb-10'>
                                    <p className="text-neutral-400 font-['RedHat'] text-sm sm:text-base xl:text-base">
                                        <b>Front-End: </b>Sistema de gestión de inventario profesional desarrollado con Blazor WebAssembly y MudBlazor. Interfaz moderna y responsive que consume una API REST con arquitectura CQRS. <b>Back-End: </b>Sistema de gestión de inventario desarrollado con ASP.NET Core 9.0 aplicando principios SOLID, CQRS, testing avanzado y arquitectura preparada para entornos cloud. (Credenciales de login en Front-End - github).
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-2 mb-5 justify-center xl:justify-start'>
                                    <Badges type="ASP.NET" />
                                    <Badges type="Blazor" />
                                    <Badges type="C#" />
                                    <Badges type="SQL-Server" />
                                    <Badges type="Azure" />
                                    <Badges type="HTML" />
                                    <Badges type="CSS" />
                                </div>
                                <nav className='flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 xl:gap-5'>
                                    <div className='flex items-center gap-2'>
                                        <span className="text-neutral-400 font-['RedHat'] text-sm xl:text-base">Front-End:</span>
                                        <a href='https://github.com/Kvr0th3c4t/InventoryAPI-Front' target='_blank' rel='noopener noreferrer'>
                                            <img src={Github} alt="Frontend GitHub" className="w-6 h-6 xl:w-8 xl:h-8 hover:scale-110 transition-transform duration-300" />
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className="text-neutral-400 font-['RedHat'] text-sm xl:text-base">Back-End:</span>
                                        <a href='https://github.com/Kvr0th3c4t/InventoryAPI-CQRS' target='_blank' rel='noopener noreferrer'>
                                            <img src={Github} alt="Backend GitHub" className="w-6 h-6 xl:w-8 xl:h-8 hover:scale-110 transition-transform duration-300" />
                                        </a>
                                    </div>
                                    <span className="text-neutral-400 font-['RedHat'] text-sm xl:text-base">Demo:</span>
                                    <a href='https://inventoryfront.adriancc.com' target='_blank' rel='noopener noreferrer'>
                                        <img src={External} alt="Live Demo" className="w-7 h-7 xl:w-8 xl:h-8 hover:scale-110 transition-transform duration-300" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </li>

                    {/* Proyecto 3: SpaceX-INFO */}
                    <li className='projectItem3'>
                        <div className='flex flex-col xl:grid xl:grid-cols-2 gap-6 xl:gap-5'>
                            <div className='w-full xl:h-full'>
                                <img
                                    src={SpaceX}
                                    alt="SpaceX-INFO - Datos oficiales"
                                    className='w-full h-48 sm:h-56 md:h-64 xl:h-full object-cover object-center rounded-lg'
                                />
                            </div>
                            <div className='text-center xl:text-right'>
                                <h2 className="text-blue-400 text-2xl sm:text-2xl md:text-3xl xl:text-3xl font-['Syne'] font-extrabold uppercase mb-2 xl:mb-1">
                                    SpaceX-INFO.
                                </h2>
                                <h3 className="text-neutral-200 text-xl sm:text-xl md:text-2xl xl:text-2xl font-['Syne'] mb-4 xl:mb-5">
                                    Datos oficiales de SpaceX desde TheSpaceDevs API
                                </h3>
                                <div className='mb-6 xl:mb-10'>
                                    <p className="text-neutral-400 font-['RedHat'] text-sm sm:text-base xl:text-base">
                                        SpaceXINFO es una aplicación web de información general sobre proyectos de SpaceX. Recopila información oficial desde la API de TheSpaceDevs y presenta datos detallados sobre lanzamientos, aeronaves, lanzadores y tripulación de SpaceX de manera organizada y visual.
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-2 mb-5 justify-center xl:justify-end'>
                                    <Badges type="HTML" />
                                    <Badges type="CSS" />
                                    <Badges type="JavaScript" />
                                    <Badges type="React" />
                                    <Badges type="TypeScript" />
                                    <Badges type="Vite" />
                                    <Badges type="Tailwind" />
                                </div>
                                <nav className='flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 xl:gap-5'>
                                    <span className="text-neutral-400 font-['RedHat'] text-sm xl:text-base">Repo:</span>
                                    <a href='https://github.com/Kvr0th3c4t/spaceXINFO' target='_blank' rel='noopener noreferrer'>
                                        <img src={Github} alt="GitHub" className="w-6 h-6 xl:w-8 xl:h-8 hover:scale-110 transition-transform duration-300" />
                                    </a>
                                    <span className="text-neutral-400 font-['RedHat'] text-sm xl:text-base">Demo:</span>
                                    <a href='https://spacexinfo.adriancc.com/' target='_blank' rel='noopener noreferrer'>

                                        <img src={External} alt="Live Demo" className="w-6 h-6 xl:w-8 xl:h-8 hover:scale-110 transition-transform duration-300" />
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