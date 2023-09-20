import PortfolioItem from './PortfolioItem';

import c2sScreen from '../../public/c2s.png';
import cvBuilderScreen from '../../public/cvBuilderScreen.png';

import reactLogo from '../../public/React-icon.svg.webp';
import nodeLogo from '../../public/Node.js_logo.webp';

const Work = () => {
  return (
    <div className='bg-gradient-to-br from-white to-slate-200 py-12' id='work'>
      <div className='container mx-auto sm:px-8 px-2'>
        <h3 className='md:text-3xl text-2xl sm:text-center text-left font-bold md:mb-20 mb-12'>
          Some of my <span className='text-blue-600'>work</span>
        </h3>
        <div className='flex flex-col md:gap-28 gap-20'>
          <PortfolioItem
            title='Companies to Students'
            image={c2sScreen}
            link='https://c2s.fonis.rs'
            stack={[
              { image: reactLogo, alt: 'React' },
              { image: nodeLogo, alt: 'Node.js' },
            ]}
          >
            Presentational website for student project. I led the team that
            created this website. We used{' '}
            <span className='text-blue-600'>React</span> to build it from
            scratch. For animations we used{' '}
            <span className='text-blue-600'>Framer motion</span>.
          </PortfolioItem>

          <PortfolioItem
            title='Resume Builder'
            image={cvBuilderScreen}
            link='https://cv.fonis.rs/#/resume-builder'
            stack={[{ image: reactLogo, alt: 'React' }]}
            reverse
          >
            Application that helps you build nice looking resume in no time. It
            was build fully in <span className='text-blue-600'>React</span> from
            scratch. I am working constantly on this project, upgrading
            it&apos;s capabilities and UX. It is used quite often.
          </PortfolioItem>
        </div>
      </div>
    </div>
  );
};

export default Work;
