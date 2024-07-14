import logo from "../assets/AhmadShaar.png";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <img className="mx-2 w-12 rounded-full" src={logo} alt="logo" />
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/in/ahmad-shaar-1594b3209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin />
        </a>
        <a href="https://github.com/">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/ahmad.shaar.9674?mibextid=ZbWKwL">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/shaar_ahmad?igsh=MWs2dzl6eGlmaXgzNQ==">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
