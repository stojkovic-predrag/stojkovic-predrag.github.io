import PortfolioItem from './PortfolioItem';

import c2sScreen from '../../public/c2s.png';
import cvBuilderScreen from '../../public/cvBuilderScreen.png';

const Work = () => {
  return (
    <div className='bg-gradient-to-br from-white to-slate-200 py-10' id='work'>
      <div className='container mx-auto'>
        <h3 className='text-3xl text-center font-bold mb-16'>
          Some of my <span className='text-blue-600'>work</span>
        </h3>
        <div className='flex flex-col gap-32'>
          <PortfolioItem
            title='Companies to Students'
            image={c2sScreen}
            link='https://c2s.fonis.rs'
          >
            Presentational website for student project. I lead the team that
            created this website. We used{' '}
            <span className='text-blue-600'>React</span> to build it from
            scratch. For animations we used{' '}
            <span className='text-blue-600'>Framer motion</span>.
          </PortfolioItem>

          <PortfolioItem
            title='Resume Builder'
            image={cvBuilderScreen}
            link='https://cv.fonis.rs/#/resume-builder'
            reverse
          >
            Application that helps you to build nice looking resume in no time.
            It was build fully in <span className='text-blue-600'>React</span>{' '}
            from scratch. I am working constantly on this project, upgrading
            it&apos;s capabilities and UX. It is used very often.
          </PortfolioItem>
        </div>
      </div>
    </div>
  );
};

export default Work;
