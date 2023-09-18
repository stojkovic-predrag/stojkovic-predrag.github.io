import { MdExpandMore } from 'react-icons/md';

import Image from 'next/image';

import profileImage from '../../public/pedja_resized.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='container mx-auto h-[80vh] flex flex-col mb-16 mt-10'>
      <div className='max-w-6xl w-full h-full mx-auto flex sm:flex-row flex-col sm:justify-between justify-center items-center'>
        <div className='w-7/12 sm:mb-0 mb-8 sm:text-left text-center'>
          <h2 className='lg:text-6xl font-extrabold mb-4 sm:text-4xl text-3xl'>
            You are in need of skilled{' '}
            <span className='text-blue-600'>web developer</span>?
          </h2>
          <p className='lg:text-xl text-gray-700 sm:text-lg text-base'>
            My name is Predrag and I can make your life easier! I am a
            passionate and skilled developer looking for opportunities to show
            my skills.
          </p>
        </div>
        <Image
          src={profileImage}
          alt='Predrag Stojkovic'
          className='lg:h-80 w-auto rounded-lg shadow-lg h-72 sm:block hidden'
        />
      </div>
      <div className='mx-auto w-fit text-blue-600 rounded-full hover:bg-gray-100 cursor-pointer transition-all'>
        <Link href='#skills'>
          <MdExpandMore size='3rem' />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
