import { HiOutlineMail } from "react-icons/hi";
import { LuPhone, LuGlobe } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { SiLeetcode, SiWhatsapp } from "react-icons/si";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiDownload } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";

function Contact() {
  return (
    <div className='max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-4 md:p-6 overflow-x-hidden'>

      {/* Lead Heading */}
      <div className='inline-flex items-center gap-3 text-[7px] sm:text-[11px] uppercase tracking-[0.4em] text-white/60 mt-15 sm:mt-5'>
        <span className='h-px w-8 bg-blue-500'></span>
        Contact Me
        <span className='h-px w-8 bg-blue-500'></span>
      </div>

      {/* Projects heading */}
      <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-6'>
        <span>GET IN </span>
        <span className="text-blue-500">TOUCH</span>
      </h1>

      <main className='flex flex-col min-[1300px]:flex-row gap-15 my-10'>
        {/* Section 1: Email, Phone, Location */}
        <section className='w-full space-y-6'>
          <p className="text-white/70">
            Have a question, opportunity, or idea in mind? I'm always open to meaningful conversations and exciting collaborations. Feel free to reach out through email, phone, or by filling out the contact form below. I'll make sure to respond as soon as possible and look forward to connecting with you!
          </p>

          {/* Container: Email, Phone, Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 fade-up">
            {/* Email */}
            <a href="mailto:reach.ajmal.dev@gmail.com"
              className="group flex flex-col p-5 border border-blue-500/30 rounded-xl bg-blue-500/10 hover:border-blue-500/70 hover:bg-blue-500/30 hover:-translate-y-2 transition-all duration-300 space-y-2">

              <div className="flex items-center justify-between">
                <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg group-hover:text-white transition-colors duration-300"><HiOutlineMail />
                </span>
                <span className="hidden group-hover:inline">
                  <RiSendPlaneFill className="text-blue-500 text-xl" />
                </span>
              </div>

              <span className="text-white font-bold">Email</span>
              <span className="text-white/60">reach.ajmal.dev@gmail.com</span>
            </a>

            {/* Phone */}
            <a href="tel:+919955578303"
              className="group flex flex-col p-5 border border-blue-500/30 rounded-xl bg-blue-500/10 hover:border-blue-500/70 hover:bg-blue-500/30 hover:-translate-y-2 transition-all duration-300 space-y-2">

              <div className="flex items-center justify-between">
                <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg group-hover:text-white transition-colors duration-300"><LuPhone />
                </span>
                <span className="hidden group-hover:inline">
                  <RiSendPlaneFill className="text-blue-500 text-xl" />
                </span>
              </div>

              <span className="text-white font-bold">Phone</span>
              <span className="text-white/60">+91 9955578303</span>
            </a>

            {/* Location */}
            <a href="https://www.google.com/maps?q=Ahmedabad" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col p-5 border border-blue-500/30 rounded-xl bg-blue-500/10 hover:border-blue-500/70 hover:bg-blue-500/30 hover:-translate-y-2 transition-all duration-300 space-y-2">

              <div className="flex items-center justify-between">
                <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg group-hover:text-white transition-colors duration-300"><GrLocation />
                </span>
                <span className="hidden group-hover:inline">
                  <RiSendPlaneFill className="text-blue-500 text-xl" />
                </span>
              </div>

              <span className="text-white font-bold">Location</span>
              <span className="text-white/60">Ahmedabad, Gujarat, India</span>
            </a>

            {/* Whatsapp */}
            <a
              href="https://wa.me/919955578303?text=Hi%20Ajmal!%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'd%20love%20to%20connect%20regarding%20an%20opportunity/collaboration.%20Looking%20forward%20to%20hearing%20from%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-5 border border-blue-500/30 rounded-xl bg-blue-500/10 hover:border-blue-500/70 hover:bg-blue-500/30 hover:-translate-y-2 transition-all duration-300 space-y-2">

              <div className="flex items-center justify-between">
                <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg group-hover:text-white transition-colors duration-300"><SiWhatsapp />
                </span>
                <span className="hidden group-hover:inline">
                  <RiSendPlaneFill className="text-blue-500 text-xl" />
                </span>
              </div>

              <span className="text-white font-bold">WhatsApp</span>
              <span className="text-white/60 line-clamp-1">Hi Ajmal! I came across your portfolio and was impressed by your work.</span>
            </a>
          </div>


          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-8 fade-down">
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/AjmalGit25" target="_blank"
                className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-20 transition-transform duration-300">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ajmal-hussain92" target="_blank"
                className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-20 transition-transform duration-300">
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com/asyncajmal" target="_blank"
                className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-20 transition-transform duration-300">
                <FaInstagram />
              </a>
              <a href="https://leetcode.com/u/AjmalAlgo" target="_blank"
                className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-20 transition-transform duration-300">
                <SiLeetcode />
              </a>
              <a href="https://twitter.com" target="_blank"
                className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-20 transition-transform duration-300">
                <FaTwitter />
              </a>
              <a href="https://ajmal-hussain.vercel.app" target="_blank"
                className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-20 transition-transform duration-300">
                <LuGlobe />
              </a>
            </div>

            {/* Download Resume */}
            <a href="/ResumeAjmal.pdf" download target="_blank"
              className="w-full sm:w-fit text-white border border-blue-300/50 rounded-full py-1 px-4 shadow-[0_0_5px_rgba(0,0,0,.8)] bg-blue-500 hover:border-blue-300 hover:text-black hover:bg-blue-300 active:scale-95 transition-all duration-300">
              <div className="flex items-center justify-center gap-2">
                <FiDownload />
                <span>Download Resume</span>
              </div>
            </a>
          </div>
        </section>

        {/* Section 2 */}
        <section className='w-full fade-right'>

          {/* Form Container */} 
          <div className="relative overflow-hidden bg-blue-800/20 border border-blue-500/40 rounded-xl p-5 hover:border-blue-500/80 shadow-[0_0_5px_rgba(10,10,70,0.5)] transition-colors duration-200">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                <span className="text-white">Let's </span>
                <span className="text-blue-500">Work Together</span>
              </h3>
              <p className="text-white/70">
                Have a project in mind? Send me a message and let's discuss how I can help.
              </p>
            </div>

            {/* Form */}
            <form className="w-full space-y-4 mb-2" action="https://formspree.io/f/xkokwyvp" method="POST">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-white/70 block">Your Name</label>
                  <input type="text" placeholder="John Doe" name="fullName" required
                    className="border border-blue-500/40 bg-blue-400/10 rounded-xl p-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/70 block">Email Address</label>
                  <input type="email" placeholder="john@example.com" name="email" required
                    className="border border-blue-500/40 bg-blue-400/10 rounded-xl p-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white" />
                </div>
              </div>

              {/* Subject */}
              {/* <div className="space-y-2">
                <label htmlFor="subject" className="text-white/70 block">Subject</label>
                <input type="text" placeholder="How can I help you?" name="subject" required
                  className="border border-blue-500/40 bg-blue-400/10 rounded-xl p-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white" />
              </div> */}

              {/* Your Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/70 block">Your Message</label>
                <textarea placeholder="Your message..." name="message" rows="5" required
                  className="border border-blue-500/40 bg-blue-400/10 rounded-xl p-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white" />
              </div>

              {/* <!-- hidden spam trap --> */}
              <input type="text" name="_gotcha" style={{ display: "none" }}></input>

              {/* Send Button */}
              <button type="submit"
                className="flex items-center gap-3 bg-blue-500 font-medium p-3 px-5 rounded-xl shadow-md cursor-pointer hover:bg-white  hover:shadow-[0_0_10px_rgba(155,155,155,.5)] transition-colors duration-300 group active:scale-98"
              >
                <span className="text-white group-hover:text-slate-800 transition-transform duration-300">Send Message</span>
                <RiSendPlaneFill className="text-white text-sm animate-pulse group-hover:text-slate-800 group-hover:translate-x-1.5 transition-transform duration-300" size={15} />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
