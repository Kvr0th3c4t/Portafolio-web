import { Button } from '../UI/Button'
import RotatingText from '../UI/RotatingText'
import { useFadeIn } from '../../hooks/useFadeIn'

export const Hero = () => {
    const ref = useFadeIn([
        ".hero-greeting",
        ".hero-name",
        ".hero-subtitle",
        ".hero-description",
        ".hero-button"],
        2,
        1,
        0.35)

    return (
        <section className='px-10 md:px-20 lg:px-40 xl:px-80 pt-20 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-20 min-h-screen w-full' id='hero' ref={ref}>
            <div className="w-full min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:min-h-[500px] xl:min-h-[500px]">
                <p className="hero-greeting text-blue-400 text-sm sm:text-base md:text-lg xl:text-lg font-extrabold font-['RedHat'] mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-5">
                    ¡Hola!, mi nombre es
                </p>

                <div className='hero-name flex flex-col sm:flex-col md:flex-row justify-start items-start md:items-center'>
                    <h1 className="text-neutral-200 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold font-['Syne'] mb-1 sm:mb-1 md:mb-2 xl:mb-2">
                        Adrián
                    </h1>
                    <RotatingText
                        texts={['Carmona', '"Kvr0th3c4t"']}
                        mainClassName="text-blue-400 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold font-['Syne']"
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

                <p className="hero-subtitle text-neutral-400 font-['Syne'] text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-5">
                    Y soy desarrollador web Full-Stack
                </p>

                <p className="hero-description text-neutral-400 font-['Syne'] text-base sm:text-base md:text-lg xl:text-lg font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-15 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-3xl xl:max-w-4xl">
                    Me encanta la física, la tecnología espacial y los videojuegos.
                    <br></br>Actualmente estoy trabajando con el stack de Microsoft (.NET, C#) y explorando Azure Cloud para acercarme al desarrollo de videojuegos.
                </p>

                <div className="hero-button">
                    <Button text="Ver mis proyectos" href="#proyectos" className='px-6 py-3 sm:px-8 md:px-9 lg:px-10 xl:px-10 text-sm sm:text-base' />
                </div>
            </div>
        </section>
    )
}