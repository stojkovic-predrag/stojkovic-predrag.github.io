import Image from 'next/image';

import reactLogo from '../../public/React-icon.svg.webp';
import nextLogo from '../../public/next.svg';
import nodeLogo from '../../public/Node.js_logo.webp';
import webflowLogo from '../../public/Webflow_logo.svg';
import SkillImage from './SkillImage';

const Skills = () => {
  return (
    <div className='bg-gray-50 py-10' id='skills'>
      <div className='container mx-auto sm:px-0 px-2 flex justify-center md:gap-32 sm:gap-20 gap-10 items-center opacity-70 flex-wrap'>
        <SkillImage image={reactLogo} alt='React' />
        <SkillImage image={nextLogo} alt='Next.js' />
        <SkillImage image={nodeLogo} alt='Node.js' />
        <SkillImage image={webflowLogo} alt='Webflow' />
      </div>
    </div>
  );
};

export default Skills;
