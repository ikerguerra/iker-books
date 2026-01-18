import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    external = false,
}) => {
    const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
};
