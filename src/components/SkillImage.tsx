import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface SkillImageProps {
  image: StaticImageData;
  alt: string;
}

const SkillImage = ({ image, alt }: SkillImageProps) => {
  return (
    <Image src={image} alt={alt} className='md:w-24 h-auto sm:w-20 w-16' />
  );
};

export default SkillImage;
