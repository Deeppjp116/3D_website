import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../style';
import SectionWraper from '../hoc';
import { EarthCanvas, StarsCanvas } from './canvas';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const bgClolor = 'backdrop-filter backdrop-blur-sm bg-opacity-20';
  const formRef = useRef();

  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setloading] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: [value] });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    // template_h128dme
    //  service_l14zytf
    // F0jKGaOKDnl_ft_2b
    emailjs
      .send(
        'service_l14zytf',
        'template_h128dme',
        {
          from_email: form.name,
          to_name: 'Deep',
          from_email: form.email,
          to_email: 'deeppjp1656@gmail.com',
          message: form.message,
        },
        'F0jKGaOKDnl_ft_2b'
      )
      .then(
        () => {
          setloading(false);
          alert('Thank you will get to you as soon as possible');

          setform({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setloading(false);
          console.log(error);
          alert('Somthing went wrong');
        }
      );
  };
  return (
    <div className='xl:mt-12 xl:flex-row  flex-col-reverse flex gap-4 overflow-hidden '>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className={`flex-[0.75] bg-black-100 p-8 rounded-2xl backdrop-filter ${bgClolor}`}
      >
        <p className={styles.heroSubText}>Get in Tuch</p>
        <h3 className={styles.sectionHeadText}> Conteact.</h3>

        <form
          ref={formRef}
          className='mt-12 flex flex-col gap-1 '
          onSubmit={handelSubmit}
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handelChange}
              placeholder="Wha's your Name "
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${bgClolor}`}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your E-mail </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handelChange}
              placeholder="Wha's your E-mail "
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${bgClolor}`}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message </span>
            <textarea
              rows='7'
              name='message' // Corrected the name to 'message'
              value={form.message}
              onChange={handelChange}
              placeholder="Wha's your message "
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${bgClolor}`}
            />
          </label>

          <button
            type='submit'
            className={`bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold  shaow-md shadow-primary rounded-xl ${bgClolor}`}
          >
            {loading ? 'Sending...' : 'send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex:1   xl:h-auto md:h-[550px] h-[350px] w-4/6'
      >
        <EarthCanvas />
      </motion.div>
      <StarsCanvas />
    </div>
  );
};

export default SectionWraper(Contact, 'contact');
