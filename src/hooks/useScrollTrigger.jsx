import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const useScrollTrigger = (triggers = []) => {

    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            for (const trigger of triggers) {
                gsap.fromTo(
                    `.${trigger}`,
                    {
                        opacity: 0,
                        y: 20
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 2,
                        scrollTrigger: {
                            trigger: `.${trigger}`,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1
                        }
                    }
                )
            }
            
        }, ref)
        return () => ctx.revert()
    }, [triggers])
    return ref
}
