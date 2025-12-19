import React from 'react'
import Github from "../../assets/img/Icons/github.svg"
import External from "../../assets/img/Icons/external.svg"
import { Badges } from '../UI/Badges'

export const ProyectosCard = ({ title, description, technologies, githubUrl, githubUrl2, githubTitle1, githubTitle2, demoUrl, image }) => {
    return (
        <div className='bg-neutral-900 rounded-lg p-5 border border-slate-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full'>
            <div className='bg-neutral-800 rounded-lg h-32 mb-4 overflow-hidden'>
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover object-center'
                    />
                ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                        <span className="text-neutral-600 text-xs">Imagen del proyecto</span>
                    </div>
                )}
            </div>

            <h4 className="text-blue-400 text-lg font-['Syne'] font-bold uppercase mb-2">
                {title}
            </h4>

            <p className="text-neutral-400 font-['RedHat'] text-sm mb-3 line-clamp-2">
                {description}
            </p>

            <div className='flex flex-wrap gap-2 mb-3'>
                {technologies.map((tech, index) => (
                    <Badges key={index} type={tech} />
                ))}
            </div>

            <div className='flex gap-3 text-sm mt-auto'>
                {githubUrl && (

                    <a href={githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors'
                    >
                        <img src={Github} alt="GitHub" className="w-5 h-5" />
                        <span>{githubTitle1}</span>
                    </a>
                )}

                {githubUrl2 && (

                    <a href={githubUrl2}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors'
                    >
                        <img src={Github} alt="GitHub" className="w-5 h-5" />
                        <span>{githubTitle2}</span>
                    </a>
                )}

                {demoUrl && (
                    <a
                        href={demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors'
                    >
                        <img src={External} alt="Demo" className="w-5 h-5" />
                        <span>Demo</span>
                    </a>
                )
                }
            </div >
        </div >
    )
}