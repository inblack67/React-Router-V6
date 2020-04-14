import React from 'react';
import { Outlet } from 'react-router-dom';

const Images = () => {
    return (
        <div className="center">
            <p className="flow-text">
                Image Gallery
            </p>
            <Outlet />
        </div>
    )
}

export default Images
