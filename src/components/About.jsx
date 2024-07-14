import aboutImg from '../assets/about.jpeg'
import { ABOUT_TEXT } from '../constant';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 initial={{y:-100 , opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:1}}  className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.3}} className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={aboutImg} alt="" className='rounded-2xl' />
            </div>
        </motion.div>
        <motion.div initial={{x:100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.3}} className="w-full lg:w-1/2 ">
          <div className="flex justify-center  lg:justify-start">
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
