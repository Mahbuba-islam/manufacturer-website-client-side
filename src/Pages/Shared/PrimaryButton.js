import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-error px-7 border-0">{children}</button>
    );
};

export default PrimaryButton;