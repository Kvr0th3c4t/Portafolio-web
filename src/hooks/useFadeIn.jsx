import React from 'react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

export const useFadeIn = (elementos = [], retardo = 0, duracion = 1, escala = 0.3) => {

    const ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(elementos,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    delay: retardo,
                    duration: duracion,
                    stagger: escala,
                    ease: "power2.out"
                })
        }, ref)

        return () => ctx.revert()
    }, [elementos, retardo, duracion, escala])

    return (
        ref
    )
}
