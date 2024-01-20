// Summary: This code is a React component that displays feedback cards from testimonials. It uses the framer-motion library for animation and styling. The testimonials data is fetched from a constants file and rendered using the FeedbackCard component.

import React from 'react';
import { motion, spring } from 'framer-motion';

import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import SectionWraper from '../hoc';

// FeedbackCard component renders an individual feedback card
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-60 xs:w-[320px] w-full border border-purple-500'
  >
    <p className='text-white font-black tet-[48px] '>"</p>
    <div className='mt-1 '>
      <p className=' text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div>
        <div className=' mt-7 flex justify-between   items-center gap-1  '>
          <div className='flex-1 flex flex-col  '>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradiant   '>@</span>
              {name}
            </p>
            <p className='mt-1 text-secondary text-[12px] '>
              {designation} of {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Feedbacks component displays a section with testimonial feedback cards
const Feedbacks = () => {
  const bgClolor = 'backdrop-filter backdrop-blur-sm bg-opacity-30';
  return (
    <>
      <div className='mt-12 bg-black-100  rounded-[20px] backdrop-filter backdrop-blur-sm bg-opacity-30 '>
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}
        >
          <motion.div
            variants={textVariant()}
            className='backdrop-filter backdrop-blur-sm bg-opacity-30 '
          >
            <p className={`${styles.sectionSubText} `}>What others say</p>
            <h2 className={`${styles.sectionHeadText}`}>Testimonals.</h2>
          </motion.div>
        </div>

        <div
          className={`${styles.paddingX} -mt-20 pd-10 flex flex-wrap gap-7 `}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWraper(Feedbacks, '');
