
export const Button = ({
    href,
    text,
    className = '',
    target = '_self',
}) => {

    const baseClass = "text-neutral-300 hover:text-blue-400 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-blue-400 duration-700 pointer"

    return (
        <a
            className={`${baseClass} ${className}`}
            href={href}
            target={target}
        >
            {text}
        </a >
    )
}
