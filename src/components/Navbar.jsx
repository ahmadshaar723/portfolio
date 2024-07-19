import logo from "../assets/AhmadShaar.png";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <img className="mx-2 w-12 rounded-full" src={logo} alt="logo" />
      </div>
      <div className="social">
        <motion.a whileHover={{scale:1.1}} className="hover:text-slate-400" href="https://www.linkedin.com/in/ahmad-shaar-1594b3209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <FaLinkedin />
        </motion.a>
        <motion.a whileHover={{scale:1.1}} className="hover:text-slate-400" href="https://github.com/" target="_blank">
          <FaGithub />
        </motion.a>
        <motion.a whileHover={{scale:1.1}} className="hover:text-slate-400" href="https://www.facebook.com/ahmad.shaar.9674?mibextid=ZbWKwL" target="_blank">
          <FaFacebook />
        </motion.a>
        <motion.a whileHover={{scale:1.1}} className="hover:text-slate-400" href="https://www.instagram.com/shaar_ahmad?igsh=MWs2dzl6eGlmaXgzNQ==" target="_blank">
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
}

export default Navbar;
