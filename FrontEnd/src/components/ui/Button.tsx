import { MouseEventHandler  } from 'react'

type ButtonProps = {
    type: 'button' | 'submit'
    title: string,
    icon?: string,
    variant: string,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, title, icon, variant, disabled, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            className={variant}
            onClick={onClick}
        >
            <label className='cursor-pointer'>
                {title}
            </label>
        </button>
    )
}

export default Button