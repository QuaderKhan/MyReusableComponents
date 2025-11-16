import React from 'react';

type CardProps = {
    title?: string;
    children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="qr-card">
            {title && <h3>{title}</h3>}
            <div>{children}</div>
        </div>
    );
};