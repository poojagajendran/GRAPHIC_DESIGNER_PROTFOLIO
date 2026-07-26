import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaPaintBrush,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0B0B0B] text-white px-6 md:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center">
          About <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
          I'm an aspiring Graphic Designer passionate about creating modern,
          clean, and impactful visual experiences that connect people with
          brands.
        </p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Left Side */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-[#151515] border border-purple-500/20 rounded-3xl p-8 shadow-xl">

              <h3 className="text-3xl font-bold mb-6">
                Who am I?
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                Hello! I'm <span className="text-purple-400">Pooja G</span>,
                currently pursuing my Bachelor's degree at
                <span className="text-white font-semibold">
                  {" "}Rajalakshmi Institute of Technology, Chennai
                </span>.
              </p>

              <p className="text-gray-400 leading-8 mb-6">
                I have a CGPA of <span className="text-purple-400">8.48</span>.
                My journey began with technology through internships in AI,
                Machine Learning, and Web Development, where I developed strong
                analytical and problem-solving skills.
              </p>

              <p className="text-gray-400 leading-8">
                Today, I channel those skills into graphic design, focusing on
                branding, social media creatives, UI visuals, posters,
                presentations, and marketing materials. I enjoy transforming
                ideas into visually compelling designs that communicate
                effectively and leave a lasting impression.
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {/* Card 1 */}
            <div className="bg-[#151515] rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500 transition hover:-translate-y-2">
              <FaGraduationCap
                size={40}
                className="text-purple-400 mb-4"
              />

              <h3 className="text-2xl font-bold mb-2">
                Education
              </h3>

              <p className="text-gray-400">
                Rajalakshmi Institute of Technology
              </p>

              <h4 className="mt-3 text-purple-400 font-semibold">
                CGPA: 8.48
              </h4>
            </div>

            {/* Card 2 */}
            <div className="bg-[#151515] rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500 transition hover:-translate-y-2">
              <FaPaintBrush
                size={40}
                className="text-purple-400 mb-4"
              />

              <h3 className="text-2xl font-bold mb-2">
                Graphic Design
              </h3>

              <p className="text-gray-400">
                Branding, Posters, Social Media Creatives, UI Graphics &
                Marketing Design.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#151515] rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500 transition hover:-translate-y-2">
              <FaLightbulb
                size={40}
                className="text-purple-400 mb-4"
              />

              <h3 className="text-2xl font-bold mb-2">
                Creativity
              </h3>

              <p className="text-gray-400">
                Passionate about solving problems through clean, engaging,
                and meaningful visual design.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#151515] rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500 transition hover:-translate-y-2">
              <FaUsers
                size={40}
                className="text-purple-400 mb-4"
              />

              <h3 className="text-2xl font-bold mb-2">
                Collaboration
              </h3>

              <p className="text-gray-400">
                Worked with teams during internships to design presentations,
                dashboards, and visual assets for technical projects.
              </p>
            </div>

          </motion.div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-24">

          <div className="bg-[#151515] rounded-2xl p-8 text-center border border-purple-500/20">
            <h2 className="text-4xl font-bold text-purple-400">
              8.48
            </h2>
            <p className="text-gray-400 mt-2">
              CGPA
            </p>
          </div>

          <div className="bg-[#151515] rounded-2xl p-8 text-center border border-purple-500/20">
            <h2 className="text-4xl font-bold text-purple-400">
              3
            </h2>
            <p className="text-gray-400 mt-2">
              Internships
            </p>
          </div>

          <div className="bg-[#151515] rounded-2xl p-8 text-center border border-purple-500/20">
            <h2 className="text-4xl font-bold text-purple-400">
              10+
            </h2>
            <p className="text-gray-400 mt-2">
              Design Projects
            </p>
          </div>

          <div className="bg-[#151515] rounded-2xl p-8 text-center border border-purple-500/20">
            <h2 className="text-4xl font-bold text-purple-400">
              100%
            </h2>
            <p className="text-gray-400 mt-2">
              Passion for Design
            </p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}