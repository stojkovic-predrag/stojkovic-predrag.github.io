import Image from 'next/image';

import reactLogo from '../../public/React-icon.svg.webp';
import nextLogo from '../../public/next.svg';
import nodeLogo from '../../public/Node.js_logo.webp';
import webflowLogo from '../../public/Webflow_logo.svg';

const Skills = () => {
  return (
    <div className='bg-gray-50 py-10' id='skills'>
      <div className='container mx-auto flex justify-center gap-32 items-center opacity-70 flex-wrap'>
        <Image src={reactLogo} width='80' height='80' alt='React' />
        <Image src={nextLogo} width='120' height='120' alt='Next.js' />
        <Image
          src={nodeLogo}
          width='120'
          height='120'
          alt='Node.js'
          className='fill-black'
        />
        <Image src={webflowLogo} width='120' height='120' alt='Webflow' />
      </div>
    </div>
  );
};

export default Skills;
