import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='py-8 w-full fixed top-0 left-0 bg-white z-10 sm:px-8 px-2'>
      <div className='flex justify-between container mx-auto'>
        <div className='uppercase font-extrabold select-none'>
          <span className='font-normal'>Predrag</span> Stojkovic
        </div>
        <div>
          <ul className='flex md:gap-8 sm:gap-4 gap-2'>
            <li>
              <Link href='#hero' onClick={() => window.scrollTo({ top: 0 })}>
                Home
              </Link>
            </li>
            <li>
              <Link href='#work'>Work</Link>
            </li>
            <li>
              <Link href='#contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
