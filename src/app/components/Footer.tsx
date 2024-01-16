import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
      return <div className="flex space-x-4 pt-28 p-4">
          <div><FaGithub className="text-2xl text-slate-500 cursor-pointer hover:text-white"/></div>
          <div><BsInstagram className="text-2xl text-slate-500 cursor-pointer hover:text-white"/></div>
          <div><FaTwitter className="text-2xl text-slate-500 cursor-pointer hover:text-white"/></div>
          <div><IoLogoLinkedin className="text-2xl text-slate-500 cursor-pointer hover:text-white"/></div>
    </div>;
};

export default Footer;
