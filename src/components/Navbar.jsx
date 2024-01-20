import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(true);

  const handleLogoClick = useCallback(() => {
    setActive('');
    window.scrollTo(0, 0);
  }, []);

  const handleListItemClick = useCallback((title) => {
    setActive(title);
  }, []);

  const handleToggleClick = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-2xl`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={handleLogoClick}
        >
          <div className='flex items-center'>
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Deep &nbsp;
              <span className='sm:block hidden'>| JS Master</span>
            </p>
          </div>
          <p className='text-red-500'></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(({ title, id }) => (
            <li
              key={id}
              className={`${
                active === title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleListItemClick(title)}
            >
              <a href={`#${id}`} className='color'>
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-start items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={handleToggleClick}
          />
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 black-gredient absolute top-20 right-0 my-4 mx-4 min-w-[140px] z-10 rounded-x1`}
          >
            {toggle ? (
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map(({ title, id }) => (
                  <li
                    key={id}
                    className={`${
                      active === title ? 'text-white' : 'text-secondary'
                    } font-poppins   font-medium  cursor-pointer text-[16px] `}
                    onClick={() => {
                      handleToggleClick();
                      handleListItemClick(title);
                    }}
                  >
                    <a href={`#${id}`} className='color'>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
