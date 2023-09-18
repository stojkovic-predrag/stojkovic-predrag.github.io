import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Contact = () => {
  return (
    <div className='py-12'>
      <div className='container mx-auto sm:px-0 px-2'>
        <h4 className='font-bold md:text-3xl sm:text-2xl text-xl mb-8'>
          Feel free to <span className='text-blue-600'>contact me</span>!
        </h4>
        <div className='flex gap-4 items-center mb-2'>
          <FaLocationArrow className='text-blue-600 text-lg' />{' '}
          <span className='font-semibold text-gray-700 sm:text-lg text-base'>
            Belgrade, Serbia
          </span>
        </div>
        <a href='mailto:predragstojkovic.jagodina@gmail.com'>
          <div className='flex gap-4 items-center'>
            <IoMdMail className='text-blue-600 text-xl' />{' '}
            <span className='font-semibold text-gray-700 sm:text-lg text-base'>
              predragstojkovic.jagodina@gmail.com
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
