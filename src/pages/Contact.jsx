import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { BiRun } from "react-icons/bi";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div className='max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 px-2'>

      {/* Lead Heading */}
      <div
        className='inline-flex items-center gap-3 text-[7px] sm:text-[11px] uppercase tracking-[0.4em] text-white/60 mt-10'>
        <span className='h-px w-8 bg-blue-500'></span>
        Contact Me
        <span className='h-px w-8 bg-blue-500'></span>
      </div>

      {/* Projects heading */}
      <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white my-10'>
        <span>GET IN </span>
        <span className="text-blue-500">TOUCH</span>
      </h1>


      <main className='flex flex-col min-[1300px]:flex-row gap-15'>
        {/* Section 1: Email, Phone, Location */}
        <section className='w-full space-y-6'>
          <div className="space-y-3">
            <h3 className="text-white text-4xl font-semibold">
              <span>Get in </span>
              <span className="text-blue-500">Touch</span>
            </h3>
            <p className="text-white/70">
              Have a question, opportunity, or idea in mind? I'm always open to meaningful conversations and exciting collaborations. Feel free to reach out through email, phone, or by filling out the contact form below. I'll make sure to respond as soon as possible and look forward to connecting with you!
            </p>
          </div>

          {/* Container: Email, Phone, Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Email */}
            <a href="mailto:ajmalashrafi2016@gmail.com"
              className="flex flex-col p-5 border border-blue-300/20 rounded-lg bg-blue-500/10 hover:border-blue-300/50 hover:bg-blue-500/30 hover:-translate-y-2 duration-300 space-y-2">
              <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg"><HiOutlineMail /></span>
              <span className="text-white font-bold">Email</span>
              <span className="text-white/60">ajmalashrafi2016@gmail.com</span>
            </a>
            {/* Phone */}
            <a href="tel:+919955578303"
              className="flex flex-col p-5 border border-blue-300/20 rounded-lg bg-blue-500/10 hover:border-blue-300/50 hover:bg-blue-500/30 hover:-translate-y-2 duration-300 space-y-2">
              <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg"><LuPhone /></span>
              <span className="text-white font-bold">Phone</span>
              <span className="text-white/60">+91 9955578303</span>
            </a>
            {/* Location */}
            <a href="https://www.google.com/maps?q=Ahmedabad" target="_blank"
              className="flex flex-col p-5 border border-blue-300/20 rounded-lg bg-blue-500/10 hover:border-blue-300/50 hover:bg-blue-500/30 hover:-translate-y-2 duration-300 space-y-2">
              <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg"><GrLocation /></span>
              <span className="text-white font-bold">Location</span>
              <span className="text-white/60">Ahmedabad, Gujarat, India</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-5">
            <a href="https://github.com/ajmalhussain92" target="_blank"
              className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-45 transition-transform duration-300">
              <FaGithub />
            </a>
            <a href="https://github.com/ajmalhussain92" target="_blank"
              className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-45 transition-transform duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ajmalhussain92" target="_blank"
              className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-45 transition-transform duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ajmalhussain92" target="_blank"
              className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-45 transition-transform duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ajmalhussain92" target="_blank"
              className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-45 transition-transform duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ajmalhussain92" target="_blank"
              className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-45 transition-transform duration-300">
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* Section 2: Contact Form container */}
        <section className='w-full'>
          <div className="space-y-3">
            <h3 className="text-white text-4xl font-semibold">
              <span>Get in </span>
              <span className="text-blue-500">Touch</span>
            </h3>
            <p>
              Have a question, opportunity, or idea in mind? I'm always open to meaningful conversations and exciting collaborations. Feel free to reach out through email, phone, or by filling out the contact form below. I'll make sure to respond as soon as possible and look forward to connecting with you!
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Contact;
