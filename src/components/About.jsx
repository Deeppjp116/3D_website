import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWraper } from '../hoc';
const bgClolor = 'backdrop-filter backdrop-blur-sm bg-opacity-30';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className={` xs:w-[250px] w-full `}>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className={` w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card `}
        >
          <div
            options={{ max: 45, scal: 1.1, speed: 450 }}
            className={`bg-tertiary      rounded-[20px] py-5 px12 min-h-[280px] flex justify-evenly items-center flex-col `}
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain ' />

            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'am skilled software developer with experiance in Pure Javascript, and
        expertise in the framework like ReactJS NodeJS, and ThreeJS. i'm quick
        leaener and collaborate closely with clients to create
        efficieant,scalebele,and user-friendly solutiion that solve reacl-world
        problms. le's work together to bring your ideas to life!!
      </motion.p>
      <div className={`mt-20 flex flex-wrap gap-10`}>
        {services.map(({ title, icon }, index) => {
          return (
            <ServiceCard key={icon} icon={icon} index={index} title={title} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWraper(About, 'about');
