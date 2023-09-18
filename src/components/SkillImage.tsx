import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface SkillImageProps {
  image: StaticImageData;
  alt: string;
}

const SkillImage = ({ image, alt }: SkillImageProps) => {
  return (
    <Image src={image} alt={alt} className='lg:w-26 md:w-20 h-auto w-16' />
  );
};

export default SkillImage;
