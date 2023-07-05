import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWraper } from '../hoc';
import { textVariant } from '../utils/motion';
const bgClolor = 'backdrop-filter backdrop-blur-sm bg-opacity-30';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ border: '8px solid #232631', width: '28px' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, borderRadius: '12px' }}
      icon={
        <div className='flex justify-center items-center w-full h-full '>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold '>
          {experience.title}
        </h3>
        <p
          className=' text-secondary text-[16px] font-semibold '
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experiance-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider   '
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Ventures.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experiance, index) => {
            return <ExperienceCard key={index} experience={experiance} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWraper(Experience, 'work');
