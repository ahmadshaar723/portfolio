import React from "react";
import { PROJECTS } from "../constant";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((proj, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1}}  className="lg:pl-10 w-full lg:w-1/3">
              <img
                src={proj.image}
                alt=""
                width={200}
                height={200}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div initial={{x:150 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1}} className="lg:pl-20 w-full max-w-xl lg:w-2/3">
              <h6 className="mb-2 font-semibold">{proj.title}</h6>
              <p className="mb-4 text-neutral-400">{proj.description}</p>
              {proj.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
