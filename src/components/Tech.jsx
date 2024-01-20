import { BallCanvas } from './canvas';
import SectionWraper from '../hoc';
import { technologies } from '../constants';
const bgcolor = 'backdrop-filter backdrop-blur-sm bg-opacity-0  ';

const Tech = () => {
  return (
    <div className={`flex flex-row flex-wrap justify-center gap-10`}>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28  ' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWraper(Tech, '');
