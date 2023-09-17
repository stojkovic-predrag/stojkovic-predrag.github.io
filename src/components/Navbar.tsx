import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='py-8 w-full flex justify-between container mx-auto'>
      <div className='uppercase font-extrabold'>Predrag Stojkovic</div>
      <div>
        <ul className='flex gap-8'>
          <li>
            <Link href='#hero'>Home</Link>
          </li>
          <li>
            <Link href='#work'>Work</Link>
          </li>
          <li>
            <Link href='#about'>About me</Link>
          </li>
          <li>
            <Link href='#contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
