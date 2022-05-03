import React from 'react';

const Footer = () => {
    return (
        <div className='text-center py-4 bg-dark text-white position-relative fixed-bottom container'>
            <h5>Copyrights &copy; belongs to <span className='text-danger fst-italic fw-bold'>--Laptop Store--</span> {new Date().getFullYear()}</h5>
        </div>
    );
};

export default Footer;