import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

interface PortfolioItemProps extends PropsWithChildren {
  title: string;
  image: StaticImageData;
  link?: any;
  reverse?: boolean;
}

const PortfolioItem = ({
  title,
  image,
  link,
  children,
  reverse = false,
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
          className='rounded-lg h-[320px] w-[520px] object-cover hover:scale-105 transition-all'
          alt='C2S Screenshot'
        />
      </Link>
      <div className='w-80 flex flex-col justify-between'>
        <div>
          <h4 className='font-bold text-xl uppercase mb-4'>{title}</h4>
          <p className='leading-7 text-gray-700 text-lg'>{children}</p>
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
