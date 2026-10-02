import { HiOutlineMail } from "react-icons/hi";
import { LuPhone, LuGlobe } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { SiLeetcode, SiWhatsapp } from "react-icons/si";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiExternalLink } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";

const contactData = [
  {
    title: "Email",
    text: "reach.ajmal.dev@gmail.com",
    href: "mailto:reach.ajmal.dev@gmail.com",
    icon: HiOutlineMail
  },
  {
    title: "Phone",
    text: "+91 9955578303",
    href: "tel:+919955578303",
    icon: LuPhone
  },
  {
    title: "Location",
    text: "Ahmedabad, Gujarat, India",
    href: "https://www.google.com/maps?q=Ahmedabad",
    icon: GrLocation
  },
  {
    title: "WhatsApp",
    text: "Hi Ajmal! I came across your portfolio and would love to connect regarding a potential opportunity or collaboration. Looking forward to hearing from you!",
    href: "https://wa.me/919955578303?text=Hi%20Ajmal!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20a%20potential%20opportunity%20or%20collaboration.%20Looking%20forward%20to%20hearing%20from%20you!",
    icon: SiWhatsapp
  },
];

const socialLinks = [
  {
    href: "https://github.com/AjmalGit25",
    icon: FaGithub
  },
  {
    href: "https://linkedin.com/in/ajmal-hussain92",
    icon: FiLinkedin
  },
  {
    href: "https://www.instagram.com/asyncajmal",
    icon: FaInstagram
  },
  {
    href: "https://leetcode.com/u/AjmalAlgo",
    icon: SiLeetcode
  },
  {
    href: "https://ajmal-hussain.vercel.app",
    icon: LuGlobe
  },
]

export {
  contactData,
  socialLinks
}