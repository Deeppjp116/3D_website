import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { github } from '../assets';
import { SectionWraper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant, zoomIn } from '../utils/motion';
const bgcolor = 'backdrop-filter backdrop-blur-sm bg-opacity-0  ';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const handleClick = () => {
    window.open(source_code_link, '_blank');
  };

  return (
    <motion.div variants={zoomIn(index * 0.5, 0.75)}>
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ${bgcolor} border border-purple-500  `}
      >
        <div className='relative w-full h-[230px] hover:border-dotted '>
          <img
            src={image}
            alt='name'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={handleClick}
              className='bg-purple-900 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-sm bg-opacity-30'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags?.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          With a strong background in web development, I have successfully
          designed and developed a full-fledged e-commerce website utilizing
          ReactJS and Node.js. Leveraging my expertise, I meticulously crafted
          the website from scratch, paying close attention to every detail to
          ensure a seamless user experience. Moreover, I implemented Srapi as
          the database, optimizing the performance and functionality of the
          platform. Throughout the development process, I remained committed to
          delivering the highest quality work, demonstrating my dedication and
          passion for coding.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 '>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(Works, '');
