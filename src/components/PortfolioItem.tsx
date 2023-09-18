import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

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
      className={`flex gap-16 items-stretch ${
        reverse ? 'flex-row-reverse' : ''
      }`}
    >
      <Link href={link} target='_blank'>
        <Image
          src={image}
          width={500}
          height={400}
          className='rounded-lg hover:rounded-md h-[320px] w-[520px] object-cover hover:brightness-110 transition-all'
          alt='C2S Screenshot'
        />
      </Link>
      <div className='w-80 flex flex-col justify-between'>
        <div>
          <h4 className='font-bold text-xl uppercase mb-4'>{title}</h4>
          <p className='leading-7 text-gray-700 text-lg'>{children}</p>
        </div>
        <div className='flex flex-row gap-8 rounded-md bg-gray-500 bg-opacity-5 w-fit py-2 px-4'>
          {stack.map((technology) => (
            <Image
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
          className='py-3 px-4 bg-gray-400 w-fit bg-opacity-10 hover:bg-opacity-20 transition-all rounded-xl'
        >
          Live preview
        </Link>
      </div>
    </article>
  );
};

export default PortfolioItem;
