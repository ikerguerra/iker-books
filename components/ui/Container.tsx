import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
    size = 'default',
}) => {
    return (
        <div className={`${styles.container} ${styles[size]} ${className}`}>
            {children}
        </div>
    );
};
