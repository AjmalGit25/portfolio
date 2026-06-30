import { GoPerson } from "react-icons/go";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";

function Education() {
  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-4">

      {/* Dash */}
      <div
        className='inline-flex mt-10'>
        <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
      </div>

      {/* Education heading */}
      <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-5'>Education</h1>

      <p className="max-w-3xl text-white/60 mb-6">A snapshot of my academic background and activities supporting my growth as a developer, underpinning the Ajmal Hussain identity that drives the Ajmal Hussain portfolio, and LeetCode by Ajmal Hussain outcomes. </p>


      {/* Education Container */}
      <div className="max-w-5xl mt-10 grid gap-8">

        {/* Education 1 */}
        <div className="relative pl-10 md:pl-12 transition-transform duration-300 ease-out hover:-translate-y-1">

          {/* Left side - vertical line and logo */}
          <div className="absolute left-3 md:left-4 top-8 bottom-0 h-full border-l border-blue-500/50"></div>
          <div className="absolute left-0 md:left-1 top-1.5 h-6 w-6 rounded-full bg-blue-500/30 border border-blue-500/30 flex items-center justify-center shadow-[0_0_0_4px_rgba(0,185,255,0.15)]">
            <GoPerson className="text-blue-400" />
          </div>

          {/* Right main container */}
          <div className="bg-linear-to-r from-blue-900 to-blue-950 rounded-xl border border-blue-500/70 p-5 md:p-6">
            {/* Heading */}
            <div className="flex items-start justify-between gap-3">
              {/* left */}
              <div>
                <h3 className="text-sm md:text-2xl text-white font-bold flex items-center gap-1.5">
                  <FaUniversity />
                  <span>Rai University</span></h3>
                <div className="text-[0.7em] md:text-sm text-white/50 flex items-center gap-1.5">
                  <FiCalendar />
                  <span>2023 - 2026</span>
                </div>
                <p className="mt-1 text-white/70 italic text-sm">Bachelor of Science in Information Technology (B.Sc IT)</p>
              </div>

              {/* right */}
              <span className="text-[11px] px-3 py-1 rounded-full border border-blue-500/50 text-white/80 bg-blue-900/50 self-start whitespace-nowrap">Full Time</span>
            </div>

            {/* Text container */}
            <div className="text-sm text-white/80 mt-4 space-y-4">
              <p>Pursuing advanced studies in Computer Science with specialized focus on Full Stack MERN Development. </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Specializing in MERN Stack technologies and applications</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Engaging in practical projects and research work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education 2 */}
        <div className="relative pl-10 md:pl-12 transition-transform duration-300 ease-out hover:-translate-y-1">

          {/* Left side - vertical line and logo */}
          <div className="absolute left-3 md:left-4 top-8 bottom-0 h-full border-l border-blue-500/50"></div>
          <div className="absolute left-0 md:left-1 top-1.5 h-6 w-6 rounded-full bg-blue-500/30 border border-blue-500/30 flex items-center justify-center shadow-[0_0_0_4px_rgba(0,185,255,0.15)]">
            <GoPerson className="text-blue-400" />
          </div>

          {/* Right main container */}
          <div className="bg-linear-to-r from-blue-900 to-blue-950 rounded-xl border border-blue-500/70 p-5 md:p-6">
            {/* Heading */}
            <div className="flex items-start justify-between gap-3">
              {/* left */}
              <div>
                <h3 className="text-sm md:text-2xl text-white font-bold flex items-center gap-1.5">
                  <FaUniversity />
                  <span>Kisan College</span>
                </h3>
                <div className="text-[0.7em] md:text-sm text-white/50 flex items-center gap-1.5">
                  <FiCalendar />
                  <span>2015 - 2017</span>
                </div>
                <p className="mt-1 text-white/70 italic text-sm">Higher Secondary Education (12th Standard)</p>
              </div>

              {/* right - Full */}
              <span className="text-[11px] px-3 py-1 rounded-full border border-blue-500/50 text-white/80 bg-blue-900/50 self-start whitespace-nowrap">Full Time</span>
            </div>

            {/* Text container */}
            <div className="text-sm text-white/80 mt-4 space-y-4">
              <p>Completed Higher Secondary education with a focus on Science stream, gaining fundamental knowledge in Mathematics and Logical problem-solving which supports my programming journey. </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Developed strong analytical and problem-solving skills</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Participated in science exhibitions and computer learnings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education 3 */}
        <div className="relative pl-10 md:pl-12 transition-transform duration-300 ease-out hover:-translate-y-1">

          {/* Left side - vertical line and logo */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0"></div>
          <div className="absolute left-0 md:left-1 top-1.5 h-6 w-6 rounded-full bg-blue-500/30 border border-blue-500/30 flex items-center justify-center shadow-[0_0_0_4px_rgba(0,185,255,0.15)]">
            <GoPerson className="text-blue-400" />
          </div>

          {/* Right main container */}
          <div className="bg-linear-to-r from-blue-900 to-blue-950 rounded-xl border border-blue-500/70 p-5 md:p-6">
            {/* Heading */}
            <div className="flex items-start justify-between gap-3">
              {/* left */}
              <div>
                <h3 className="text-sm md:text-2xl text-white font-bold flex items-center gap-1.5">
                  <FaUniversity />
                  <span>Shri Gandhi High School</span></h3>
                <div className="text-[0.7em] md:text-sm text-white/50 flex items-center gap-1.5">
                  <FiCalendar />
                  <span>2014 - 2015</span>
                </div>
                <p className="mt-1 text-white/70 italic text-sm">Matriculation (10th Standard)</p>
              </div>

              {/* right */}
              <span className="text-[11px] px-3 py-1 rounded-full border border-blue-500/50 text-white/80 bg-blue-900/50 self-start whitespace-nowrap">Full Time</span>
            </div>

            {/* Text container */}
            <div className="text-sm text-white/80 mt-4 space-y-4">
              <p>Successfully completed my Matric (10th) education, where I developed a strong academic base and interest in analytical thinking and technology. </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Developed strong <strong>discipline, ethics, and positive behavior</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Built essential <strong>analytical thinking and problem-solving skills</strong></span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recognition */}
      <div className="flex items-center gap-4 text-white/40 mt-15 w-fit cursor-default group">
        {/* logo */}
        < div className="shrink-0 border rounded-full w-10 h-10 flex items-center justify-center group-hover:text-blue-500 group-hover:border-blue-500/70 transition-colors duration-300" >
          <FaGraduationCap className="text-lg" />
        </div >
        {/* Paragraph */}
        <div className="uppercase flex flex-col tracking-widest">
          <span className="text-sm font-bold text-white/60">Credentials</span>
          <span className="text-xs">Transcripts available upon request</span>
        </div >
      </div >
    </div>
  );
}

export default Education
