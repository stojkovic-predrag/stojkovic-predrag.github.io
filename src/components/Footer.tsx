import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-blue-600 py-6 text-white'>
      <div className='container mx-auto sm:px-8 px-2 flex justify-between items-center'>
        <div className='font-bold sm:text-lg text-base'>
          Copyright &copy; {new Date().getFullYear()}. All rights reserved
        </div>
        <div className='flex justify-end sm:gap-4 gap-2 items-center sm:text-2xl text-xl'>
          <Link href='www.linkedin.com/in/predrag-stojkovic'>
            <div className='p-2 rounded-full bg-white bg-opacity-0 hover:bg-opacity-10 transition-all'>
              <FaLinkedinIn />
            </div>
          </Link>
          <Link href='https://github.com/predragstojkovic03'>
            <div className='p-2 rounded-full bg-white bg-opacity-0 hover:bg-opacity-10 transition-all'>
              <FaGithub />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
