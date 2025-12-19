import React from 'react'
import { ProyectosCard } from '../UI/ProyectosCard'
import InventoryAPI from "../../../src/assets/img/InventoryAPI.webp"
import { useState } from 'react'
import Innovatech from "../../../src/assets/img/Innovatech.webp"
import KuroGame from "../../../src/assets/img/KuroGame.webp"

export const ProyectosSecundarios = () => {

    const [isExpanded, setIsExpanded] = useState(false)
    const secondaryProjects = [
        {
            title: "Innovatech",
            description: "Sistema de gestión de vacantes",
            technologies: ["Angular", "JavaScript", "MySQL", "Bootstrap", "NodeJs", "TypeScript", "HTML", "CSS", "Spring", "Java"],
            githubTitle1: "Front-End",
            githubUrl: "https://github.com/Kvr0th3c4t/VacantesFront",
            githubTitle2: "Back-End",
            githubUrl2: "https://github.com/Kvr0th3c4t/VacantesRetoBack",
            demoUrl: "https://vacantes.adriancc.com/landing",
            image: Innovatech
        },
        {
            title: "Kuro Game",
            description: "KuroGame es un pequeño juego 2D desarrollado con Phaser.js como proyecto final del curso de JavaScript de Codedex.",
            technologies: ["HTML", "CSS", "JavaScript", "Phaser"],
            githubTitle1: "Github",
            githubUrl: "https://github.com/Kvr0th3c4t/KuroGame",
            githubUrl2: null,
            demoUrl: "https://kurogame.adriancc.com/",
            image: KuroGame
        }

    ]

    const toggleProjects = () => {
        setIsExpanded(!isExpanded)

        if (isExpanded) {
            setTimeout(() => {
                document.getElementById('toggle-projects-btn')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
            }, 100)
        }
    }
    return (
        <section className='px-4 sm:px-8 md:px-20 lg:px-40 xl:px-50 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-15 w-full'>
            {/* Botón toggle */}
            <div className='flex justify-center items-center mb-8'>
                <button
                    id='toggle-projects-btn'
                    onClick={toggleProjects}
                    const className="text-neutral-300 hover:text-blue-400 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(140,140,140,0.16)] to-transparent rounded-md py-2 px-6 shadow-md shadow-white/20 hover:shadow-blue-400 duration-700 cursor-pointer flex justify-center items-center-safe"
                >
                    <span className="text-lg font-['Syne']">
                        {isExpanded ? 'Ver menos proyectos' : 'Ver más proyectos'}
                    </span>
                    <svg
                        className={`w-5 h-5 ml-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Sección desplegable */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <h3 className="text-xl md:text-2xl font-['Syne'] font-bold text-neutral-300 mb-6 text-center">
                    Otros Proyectos
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {secondaryProjects.map((project, index) => (
                        <ProyectosCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            githubTitle1={project.githubTitle1}
                            githubTitle2={project.githubTitle2}
                            githubUrl={project.githubUrl}
                            githubUrl2={project.githubUrl2}
                            demoUrl={project.demoUrl}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
            {/* <div className='flex justify-center items-center mt-8'>
                <button
                    id='toggle-projects-btn'
                    onClick={toggleProjects}
                    const className={`text-neutral-300 hover:text-blue-400 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(140,140,140,0.16)] to-transparent rounded-md py-2 px-6 shadow-md shadow-white/20 hover:shadow-blue-400 duration-700 cursor-pointer flex justify-center items-center-safe ${isExpanded ? '' : 'hidden'}`}
                >
                    <span className="text-lg font-['Syne']">
                        {isExpanded ? 'Ver menos proyectos' : 'Ver más proyectos'}
                    </span>
                    <svg
                        className={`w-5 h-5 ml-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div> */}
        </section>
    )
}