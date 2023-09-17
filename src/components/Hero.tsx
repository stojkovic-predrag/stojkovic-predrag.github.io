import Image from 'next/image';
import React from 'react';

import profileImage from '../../public/pedja_resized.png';

const Hero = () => {
  return (
    <div className='container mx-auto h-[600px]'>
      <div className='max-w-6xl w-full h-full mx-auto flex justify-between items-center'>
        <div className='w-7/12'>
          <h2 className='text-6xl font-extrabold mb-4'>
            You are in need of skilled{' '}
            <span className='text-blue-600'>web developer</span>?
          </h2>
          <p className='text-xl text-gray-700'>
            My name is Predrag and I can make your life easier! I am a
            passionate and skilled developer looking for opportunities to show
            my skills.
          </p>
        </div>
        <Image
          src={profileImage}
          alt='Predrag Stojkovic'
          width='300'
          height='300'
          className='rounded-lg shadow-lg'
        />
      </div>
    </div>
  );
};

export default Hero;
