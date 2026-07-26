import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import profile from "../assets/images/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#080808] text-white flex items-center px-6 md:px-20 pt-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-purple-400 text-lg font-medium">
            👋 Hello, I'm
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
            Pooja
          </h1>

          <h2 className="text-3xl mt-4 text-gray-300">
            Graphic Designer
          </h2>

          <p className="text-gray-400 mt-8 leading-8 max-w-xl">
            Passionate Graphic Designer specializing in branding,
            social media creatives, UI/UX design, posters,
            logos, and digital experiences. I enjoy transforming
            ideas into visually appealing and meaningful designs.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

           <motion.a
             href="/resume/Pooja_RESUME.pdf"
             download="Pooja_RESUME.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition"
            >
  <FaDownload />
  Download Resume
</motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-500 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-purple-600 transition"
            >
              Hire Me
              <FaArrowRight />
            </motion.a>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>
              <h3 className="text-4xl font-bold text-purple-400">
                8.48
              </h3>

              <p className="text-gray-400 mt-2">
                CGPA
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-400">
                3+
              </h3>

              <p className="text-gray-400 mt-2">
                Internships
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-400">
                10+
              </h3>

              <p className="text-gray-400 mt-2">
                Design Projects
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 bg-purple-500 rounded-full blur-[80px] opacity-40"></div>

            {/* Profile Image */}

            <img
              src={profile}
              alt="Pooja"
              className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] object-cover rounded-full border-[8px] border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:scale-105 transition duration-500"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}