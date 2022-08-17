import React from 'react';

const NavBar = () => {
  return (
    <nav className='nav flex items-center justify-center w-full pt-2'>
      <a href='https://imgix.com' className='flex items-center justify-center'>
        <img
          src='https://assets.imgix.net/imgix-logo.png'
          alt='IMGix Logo'
          className='h-8 pt-1 b-1'
        />
      </a>
    </nav>
  );
};

export default NavBar;
