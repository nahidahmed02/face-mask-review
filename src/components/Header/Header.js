import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {

    return (
        <nav className='d-flex justify-content-center my-4'>
            <CustomLink to={'/home'} className='me-4'>Home</CustomLink>
            <CustomLink to={'/reviews'} className='me-4'>Reviews</CustomLink>
            <CustomLink to={'/dashboard'} className='me-4'>Dashboard</CustomLink>
            <CustomLink to={'/blogs'} className='me-4'>Blogs</CustomLink>
            <CustomLink to={'/about'}>About</CustomLink>
        </nav>
    );
};

export default Header;