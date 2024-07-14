import { HERO_CONTENT } from "../constant";
import profile from "../assets/ahmad2.jpg";
import { motion } from "framer-motion";

const container =(delay) =>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  }
})

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" whileInView="visible" className="hero-name">
              Ahmad Shaar
            </motion.h1>
            <motion.span variants={container(0.3)} initial="hidden" whileInView="visible" className="hero-title">
              Full Stack Developer
            </motion.span>
            <motion.p variants={container(0.4)} initial="hidden" whileInView="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full  lg:w-1/2 lg:p-8">
          <motion.div initial={{x:100,opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5 ,delay:0.6}} className="flex items-end justify-center lg:justify-end ">
            <img src={profile} alt="" width={350} className="rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
