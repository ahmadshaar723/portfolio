import { EXPERIENCES } from "../constant";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-800  pb-4">
      <motion.h1 initial={{y:-100 , opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:1}} className="my-20 text-center text-4xl">Experience</motion.h1>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
            <motion.div initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1}} className="lg:pl-32 w-full lg:w-1/3">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </motion.div>
            <motion.div initial={{x:150 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1}} className="lg:pl-20 max-w-xl lg:w-2/3">
              <div>
              <h6 className="mb-2 font-semibold">
                {exp.role} -{" "}
                <span className="text-sm text-purple-300">{exp.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400 ">{exp.description}</p>
              {exp.technologies.map((tech , index)=>(
                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">{tech}</span>
              ))}

              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
