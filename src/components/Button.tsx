import React from 'react'
import Link from 'next/link'

interface Props {
    label: string,
    type?: "button" | "submit" | "reset",
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    position?: "left" | "center" | "right" | "full-width",
    variant?: "primary" | "text",
    className?: string,
    linkTo?: string
}

const Button = (props: Props) => {
    const {
        label,
        type = "button",
        onClick = () => {},
        position = "left",
        variant = "primary",
        className = "",
        linkTo
    } = props;

    const positionClasses = {
        "left": "",
        "center": "mx-auto",
        "right": "ml-auto",
        "full-width": "w-full"
    };

    const variantClasses = {
        "primary": "bg-indigo-600 text-neutral-200 hover:bg-indigo-700 dark:hover:bg-indigo-500",
        "text": "bg-transparent text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
    };

    const commonClasses = "px-4 py-2 rounded-xl transition-colors";

    const buttonClasses = `${commonClasses} ${variantClasses[variant]} ${positionClasses[position]} ${className}`;

    // render Link instead if the button is used for navigation
    if (linkTo) {
        return (
            <div className={`flex ${position === 'center' ? 'justify-center' : position === 'right' ? 'justify-end' : position === 'full-width' ? 'w-full' : ''}`}>
                <Link
                    href={linkTo}
                    className={buttonClasses}
                >
                    <span>{label}</span>
                </Link>
            </div>
        )
    }

    return (
        <div className={`flex ${position === 'center' ? 'justify-center' : position === 'right' ? 'justify-end' : position === 'full-width' ? 'w-full' : ''}`}>
            <button
                className={buttonClasses}
                type={type}
                onClick={onClick}
            >
                <span>{label}</span>
            </button>
        </div>
    )
}

export default Button