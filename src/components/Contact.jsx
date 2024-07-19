import { CONTACT } from "../constant"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
        <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Contact
      </motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="my-4 ">{CONTACT.address}</motion.p>
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="my-4 hover:text-slate-400"><a href="tel:+96176519688">{CONTACT.phoneNo}</a></motion.p>  
            <a href="mailto:ahmadshaar723@gmail.com" target="_blank" className="border-b hover:text-slate-400 hover:border-slate-400">{CONTACT.email}</a>
        </div>
    </div> 
  )
}

export default Contact