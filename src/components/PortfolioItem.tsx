import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { FaLink } from 'react-icons/fa';

interface PortfolioItemProps extends PropsWithChildren {
  title: string;
  image: StaticImageData;
  link?: any;
  reverse?: boolean;
  stack: { image: StaticImageData; alt: string }[];
}

const PortfolioItem = ({
  title,
  image,
  link,
  children,
  reverse = false,
  stack,
}: PortfolioItemProps) => {
  return (
    <article
      className={`flex md:flex-row flex-col-reverse md:gap-16 gap-4 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <Link href={link} target='_blank'>
        <Image
          src={image}
          className='rounded-lg hover:rounded-md md:h-[320px] md:w-[520px] h-full w-auto object-cover hover:brightness-110 transition-all'
          alt='C2S Screenshot'
        />
      </Link>
      <div className='w-80 flex flex-col justify-between'>
        <div className='md:mb-0 mb-4'>
          <h4 className='font-bold md:text-xl text-lg uppercase md:mb-4 mb-2'>
            {title}
          </h4>
          <p className='leading-7 text-gray-700 md:text-lg text-base'>
            {children}
          </p>
        </div>
        <div className='flex flex-row gap-8 rounded-md bg-gray-500 bg-opacity-5 w-fit py-2 px-4 md:mb-0 mb-4'>
          {stack.map((technology) => (
            <Image
              key={technology.image.src + technology.alt}
              src={technology.image}
              height={30}
              className='opacity-70'
              alt={technology.alt}
            />
          ))}
        </div>
        <Link
          href={link}
          target='_blank'
          className='py-2 px-3 bg-gray-400 text-gray-700 flex gap-2 items-center w-fit bg-opacity-10 hover:bg-opacity-20 transition-all rounded-lg'
        >
          <FaLink /> Live preview
        </Link>
      </div>
    </article>
  );
};

export default PortfolioItem;
