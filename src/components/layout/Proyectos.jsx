import React from 'react'
import PinneHopper from "../../../src/assets/img/PinneHopper.png"
import Innovatech from "../../../src/assets/img/Innovatech.png"
import Github from "../../../src/assets/img/Icons/github.svg"
import SpaceX from "../../../src/assets/img/spacexinfo.png"
import External from "../../../src/assets/img/Icons/external.svg"
import { Badges } from '../UI/Badges'

export const Proyectos = () => {
    return (
        <section className='px-50 py-15 w-full min-h-screen' id='proyectos'>
            <h2 className="text-neutral-200 text-3xl font-extrabold font-['Syne'] mb-10">
                <span className="text-blue-400 font-extrabold mb-5">II. </span>Proyectos principales
            </h2>
            <div>
                <ul>
                    <li className='grid grid-cols-2 gap-5 mb-20'>
                        <div className='w-full h-full'>
                            <img
                                src={PinneHopper}
                                alt=""
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
                                <div>
                                    <a href='https://github.com/Kvr0th3c4t/PineHopper' target='_blank'>
                                        <img src={Github} alt="" className="w-8 h-8" />
                                    </a>
                                </div>
                                <div>
                                    <a href='https://tfgv2.adriancc.com/' target='_blank'>
                                        <img src={External} alt="" className="w-8 h-8" />
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </li>
                    <li className='grid grid-cols-2 gap-5 mb-20'>

                        <div>
                            <h2 className="text-blue-400 text-3xl font-['Syne'] font-extrabold uppercase mb-1">Innovatech.</h2>
                            <h3 className="text-neutral-200 text-2xl font-['Syne'] mb-5">Sistema de gestión de vacantes de empleo</h3>
                            <div className='mb-10'>
                                <p className="text-neutral-400 font-['RedHat'] ">Interfaz web moderna y responsive para el sistema de gestión de vacantes de empleo. Desarrollada con Angular 18, proporciona una experiencia de usuario intuitiva y completa para administradores, empresas y candidatos. Integra completamente con la API REST del backend para ofrecer funcionalidades completas de gestión de empleos.</p>
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
                                    <h3 className="text-neutral-400 font-['RedHat'] ">Front-End:</h3>
                                    <a href='https://github.com/Kvr0th3c4t/VacantesFront' target='_blank'>
                                        <img src={Github} alt="" className="w-8 h-8" />
                                    </a>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <h3 className="text-neutral-400 font-['RedHat'] ">Back-End:</h3>
                                    <a href='https://github.com/Kvr0th3c4t/VacantesRetoBack' target='_blank'>
                                        <img src={Github} alt="" className="w-8 h-8" />
                                    </a>
                                </div>
                                <div>
                                    <a href='https://vacantes.adriancc.com/' target='_blank'>
                                        <img src={External} alt="" className="w-8 h-8" />
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div className='w-full h-full'>
                            <img
                                src={Innovatech}
                                alt=""
                                className='object-cover object-center rounded-lg'
                            />
                        </div>
                    </li>
                    <li className='grid grid-cols-2 gap-5 mb-20'>
                        <div className='w-full h-full'>
                            <img
                                src={SpaceX}
                                alt=""
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
                                <div>
                                    <a href='https://github.com/Kvr0th3c4t/spaceXINFO' target='_blank'>
                                        <img src={Github} alt="" className="w-8 h-8" />
                                    </a>
                                </div>
                                <div>
                                    <a href='https://spacexinfo.adriancc.com/' target='_blank'>
                                        <img src={External} alt="" className="w-8 h-8" />
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </li>
                </ul>
            </div>
        </section >
    )
}
