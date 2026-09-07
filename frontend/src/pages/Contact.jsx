import { HiOutlineMail } from "react-icons/hi";
import { LuPhone, LuGlobe } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { SiLeetcode, SiWhatsapp } from "react-icons/si";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiDownload } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";
import BACKEND_URL from "../../config/api.js";

function Contact() {
  const [loading, setLoading] = useState(false);

  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Form Validation Errors
  const [errors, setErrors] = useState([]);

  const [emailSent, setEmailSent] = useState(null);
  const [submittedData, setSubmittedData] = useState({});

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/ResumeAjmal.pdf";
    link.download = "Ajmal_Resume.pdf";
    link.click();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      message
    }

    try {
      setLoading(true);
      // await axios.post("https://formspree.io/f/xkokwyvp", formData);     // Earlier Formpsree API
      const sentRes = await axios.post(`${BACKEND_URL}/api/v1/email`, formData);

      setSubmittedData({ fullName, email, message });
      setEmailSent(sentRes.data.response.id);

      setErrors([]);
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log("Error occured during form submission", error);
      if (error.response?.status === 400) {
        const messages = error.response.data.message;
        setErrors(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  }

  // Prevent the background page's scrolling (during Modal open)
  useEffect(() => {
    if (emailSent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [emailSent]);

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
            <button onClick={downloadResume}
              className="w-full sm:w-fit bg-blue-300 py-1 px-4 rounded-full hover:bg-blue-400 cursor-pointer transition-colors duration-200">
              <div className="flex items-center justify-center gap-2">
                <FiDownload />
                <span>Download Resume</span>
              </div>
            </button>
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
            <form onSubmit={handleFormSubmit} className="w-full space-y-4 mb-2">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                <div className="space-y-1">
                  <label htmlFor="fullName" className="text-white/70 block">Your Name</label>
                  <input
                    type="text" placeholder="John Doe" name="fullName" required
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    className="border border-blue-500/40 bg-blue-400/10 rounded-xl p-2 px-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white"
                  />
                  <span className="text-red-400 text-[12px] font-medium">{errors.find((err) => err.field === "fullName")?.message}</span>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-white/70 block">Email Address</label>
                  <input
                    type="email" placeholder="john@example.com" name="email" required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="border border-blue-500/40 bg-blue-400/10 rounded-xl p-2 px-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white"
                  />
                  <span className="text-red-400 text-[12px] font-medium">{errors.find((err) => err.field === "email")?.message}</span>
                </div>
              </div>

              {/* Subject */}
              {/* <div className="space-y-1">
                <label htmlFor="subject" className="text-white/70 block">Subject</label>
                <input type="text" placeholder="How can I help you?" name="subject" required
                  className="border border-blue-500/40 bg-blue-400/10 rounded-xl p-2 px-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white" />
              </div> */}

              {/* Your Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-white/70 block">Your Message</label>
                <textarea placeholder="Your message..." name="message" rows="5" required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="border border-blue-500/40 bg-blue-400/10 rounded-xl p-2 px-3 w-full outline-none focus:border-blue-500 transition duration-300 placeholder:text-white/40 caret-white text-white"
                />
                <span className="text-red-400 text-[12px] font-medium">{errors.find((err) => err.field === "message")?.message}</span>
              </div>

              {/* <!-- hidden spam trap --> */}
              <input type="text" name="_gotcha" style={{ display: "none" }}></input>

              {/* Send Button */}
              <button type="submit"
                className="flex items-center justify-center gap-3 bg-blue-500 font-medium p-2 px-5 w-full rounded-xl shadow-md cursor-pointer hover:bg-white  hover:shadow-[0_0_10px_rgba(155,155,155,.5)] transition-colors duration-300 group active:scale-98"
              >
                <span className="text-white group-hover:text-slate-800 transition-transform duration-300">{loading ? "Sending..." : "Send Message"}</span>
                <RiSendPlaneFill className="text-white text-sm animate-pulse group-hover:text-slate-800 group-hover:translate-x-1.5 transition-transform duration-300" size={15} />
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* =========== Email Send Confirmation Modal =============== */}
      {emailSent && (
        <div
          onClick={() => setEmailSent(null)}
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-20"
        >
          <div className="flex items-center justify-center w-full px-6">

            {/* Notice Card */}
            <div
              onClick={(e) => { e.stopPropagation() }}
              className="bg-white border border-blue-500 rounded-xl shadow-[0_0_15px_rgba(200,200,200,.5)] max-w-lg overflow-hidden">
              {/* Upper part */}
              <div className="flex flex-col items-center justify-center gap-3 bg-linear-to-t from-blue-800 to-blue-950 p-5">
                <span className="shrink-0 text-blue-900 text-2xl bg-white/10 border border-white/20 rounded-full p-2">✉️</span>
                <span className="text-white text-lg sm:text-2xl font-medium">🎉 Email Sent Successfully! 🎉</span>
                <span className="text-white/60 text-xs">Your information has been received successfully. We'll respond back in a moment.</span>
              </div>

              {/* Middle part: Details */}
              <div className="mb-3">
                <div className="divide-y divide-slate-200">
                  {/* Full Name */}
                  <div className="px-5 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Full Name
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800 line-clamp-1">
                      {submittedData.fullName}
                    </p>
                  </div>

                  {/* Email */}
                  <div className="px-5 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Email Address
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800 line-clamp-1">
                      {submittedData.email}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="px-5 py-3 border-l-4 border-l-blue-600 bg-blue-100/50 rounded-xl mx-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Message</p>
                  <p className="mt-1 text-sm text-slate-800 line-clamp-5">
                    {submittedData.message}
                  </p>
                </div>
              </div>

              {/* Lower Part */}
              <div className="px-5 py-3 bg-white/90 border-t border-slate-200 space-y-1">
                <p className="text-slate-600 text-xs sm:text-sm text-center">
                  This message was submitted through <strong className="text-blue-600">Ajmal Hussain's Portfolio</strong>
                </p>

                <p className="text-slate-400 text-[10px] sm:text-xs text-center">© {new Date().getFullYear()} Md Ajmal Hussain</p>
              </div>

              {/* Back to Portfolio */}
              <div className="w-full px-5 py-3 pb-5">
                <button
                  onClick={() => setEmailSent(null)}
                  className="font-medium text-white bg-linear-to-b from-blue-800 to-blue-950 px-5 py-2 w-full rounded-xl cursor-pointer hover:from-blue-950 hover:to-blue-800 transition-colors duration-200"
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
