import { HiOutlineMail } from "react-icons/hi";
import { LuPhone, LuGlobe } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { TbSend } from "react-icons/tb";

function Contact() {
  return (
    <div className='max-w-6xl sm:ml-20 md:ml-20 lg:ml-50 p-2'>

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
            <h3 className="text-white text-2xl font-semibold">
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
            <a href="mailto:reach.ajmal.dev@gmail.com"
              className="flex flex-col p-5 border border-blue-500/30 rounded-lg bg-blue-500/10 hover:border-blue-500/70 hover:bg-blue-500/30 hover:-translate-y-2 duration-300 space-y-2">
              <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg"><HiOutlineMail /></span>
              <span className="text-white font-bold">Email</span>
              <span className="text-white/60">reach.ajmal.dev@gmail.com</span>
            </a>
            {/* Phone */}
            <a href="tel:+919955578303"
              className="flex flex-col p-5 border border-blue-500/30 rounded-lg bg-blue-500/10 hover:border-blue-500/70 hover:bg-blue-500/30 hover:-translate-y-2 duration-300 space-y-2">
              <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg"><LuPhone /></span>
              <span className="text-white font-bold">Phone</span>
              <span className="text-white/60">+91 9955578303</span>
            </a>
            {/* Location */}
            <a href="https://www.google.com/maps?q=Ahmedabad" target="_blank"
              className="flex flex-col p-5 border border-blue-500/30 rounded-lg bg-blue-500/10 hover:border-blue-500/70 hover:bg-blue-500/30 hover:-translate-y-2 duration-300 space-y-2">
              <span className="text-blue-500 text-2xl bg-blue-500/20 h-10 w-10 inline-flex items-center justify-center rounded-lg"><GrLocation /></span>
              <span className="text-white font-bold">Location</span>
              <span className="text-white/60">Ahmedabad, Gujarat, India</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://github.com/AjmalGit25" target="_blank"
              className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-20 transition-transform duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ajmal-hussain92" target="_blank"
              className="text-white/60 border border-blue-300/20 rounded-full p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-115 hover:rotate-20 transition-transform duration-300">
              <FiLinkedin />
            </a>
            <a href="https://instagram.com/" target="_blank"
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
        </section>

        {/* Section 2: Contact Form container */}
        <section className='w-full'>
          <div className="bg-blue-900/30 border border-blue-500/40 rounded-lg p-5 hover:border-blue-500/80">
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
                    className="border border-blue-500/40 bg-blue-400/10 rounded-lg p-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/70 block">Email Address</label>
                  <input type="email" placeholder="john@example.com" name="email" required
                    className="border border-blue-500/40 bg-blue-400/10 rounded-lg p-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white" />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white/70 block">Subject</label>
                <input type="text" placeholder="How can I help you?" name="subject" required
                  className="border border-blue-500/40 bg-blue-400/10 rounded-lg p-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white" />
              </div>

              {/* Your Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/70 block">Your Message</label>
                <textarea placeholder="Tell me about your project..." name="message" required
                  className="border border-blue-500/40 bg-blue-400/10 rounded-lg p-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white" />
              </div>

              {/* <!-- hidden spam trap --> */}
              <input type="text" name="_gotcha" style={{ display: "none" }}></input>

              {/* Send Button */}
              <button type="submit"
                className="flex items-center gap-3 bg-blue-500 font-medium p-2 px-4 rounded-lg shadow-lg hover:translate-x-1 hover:shadow-blue-500/50 transition duration-300">
                <span className="text-white">Send Message</span>
                <TbSend className="animate-bounce mt-1 text-white" />
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Contact;
