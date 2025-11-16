import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
};

export const Button: React.FC<Props> = ({ variant = 'primary', children, ...rest }) => {
    return (
        <button data-variant={variant} {...rest}>
            {children}
        </button>
    );
};