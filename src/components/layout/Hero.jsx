import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '../UI/Button'
import RotatingText from '../UI/RotatingText'

export const Hero = () => {

    const heroRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo([
                ".hero-greeting",
                ".hero-name",
                ".hero-subtitle",
                ".hero-description",
                ".hero-button"
            ],
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    delay: 2,
                    duration: 1,
                    stagger: 0.45,
                    ease: "power2.out"
                })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className='px-80 pt-15 min-h-screen' id='hero' ref={heroRef}>
            <div className="w-full min-h-[500px]">
                <p className="hero-greeting text-blue-400 text-lg font-extrabold font-['RedHat'] mb-5">
                    ¡Hola!, mi nombre es
                </p>

                <div className='hero-name flex justify-start items-center'>
                    <h1 className="text-neutral-200 text-7xl font-extrabold font-['Syne'] mb-2">Adrián </h1>
                    <RotatingText
                        texts={[' Carmona', ' "Kvr0th3c4t"']}
                        mainClassName="text-blue-400 text-7xl font-extrabold font-['Syne']"
                        staggerFrom={"first"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3000}
                    />
                </div>

                <p className="hero-subtitle text-neutral-400 font-['Syne'] text-5xl font-bold mb-5">
                    Y desarrollo aplicaciones web
                </p>

                <p className="hero-description text-neutral-400 font-['Syne'] text-lg font-bold mb-15 max-w-4xl">
                    Soy un desarrollador web con enfoque en frontend, aunque también tengo conocimientos de backend que me permiten abordar proyectos full-stack.
                </p>

                <div className="hero-button">
                    <Button text="Ver mis proyectos" href="#proyectos" className='px-10 py-3' />
                </div>
            </div>
        </section>
    )
}