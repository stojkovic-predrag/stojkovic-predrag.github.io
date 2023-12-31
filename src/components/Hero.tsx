import { AnimatePresence, motion } from 'framer-motion';
import { MdExpandMore } from 'react-icons/md';

import Image from 'next/image';

import profileImage from '../../public/pedja_resized.png';
import profileSmall from '../../public/profileSmall.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='container sm:px-8 px-2 mx-auto h-[80vh] flex flex-col mb-16 mt-10'>
      <div className='max-w-6xl w-full h-full mx-auto flex sm:flex-row flex-col sm:justify-between justify-center items-center'>
        <div className='mx-auto rounded-full h-24 w-24 overflow-hidden mb-16 border-gray-200 border-2 sm:hidden block mt-10'>
          <Image
            src={profileSmall}
            objectFit='cover'
            className='h-full w-full'
            alt='Predrag Stojkovic'
          />
        </div>
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
        <AnimatePresence>
          <motion.div
            initial={{ y: 100, rotateY: 60, opacity: 0 }}
            whileInView={{ y: 0, rotateY: 0, opacity: 1 }}
          >
            <Image
              src={profileImage}
              key='Predrag Stojkovic'
              alt='Predrag Stojkovic'
              className='lg:h-80 w-auto rounded-lg shadow-lg h-72 sm:block hidden'
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.div
        animate={{ y: [0, 10, 10, 0], transition: { repeat: Infinity } }}
        className='mx-auto w-fit text-blue-600 rounded-full hover:bg-gray-100 cursor-pointer'
      >
        <Link href='#skills'>
          <MdExpandMore size='3rem' />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
