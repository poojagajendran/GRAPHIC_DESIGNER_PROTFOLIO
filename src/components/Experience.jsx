import { motion } from "framer-motion";
import {
  FaRobot,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const experience = [
  {
    icon: <FaRobot size={35} />,
    title: "AI Internship",
    company: "Artificial Intelligence",
    description:
      "Designed presentations, infographics, and workflow diagrams that made complex AI concepts easier to understand for technical and non-technical audiences.",
  },

  {
    icon: <FaLaptopCode size={35} />,
    title: "Web Development Internship",
    company: "Web Development",
    description:
      "Collaborated with developers to improve website layouts, create responsive UI elements, banners, icons, and visual assets for modern web applications.",
  },

  {
    icon: <FaChartLine size={35} />,
    title: "Machine Learning Internship",
    company: "Machine Learning",
    description:
      "Created reports, dashboards, presentation decks, and technical documentation with visually appealing layouts for project demonstrations.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0B0B0B] text-white py-24 px-6 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold text-center">
          My <span className="text-purple-500">Experience</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          My internships helped me build creativity, communication,
          collaboration, and design-thinking skills while working on
          multidisciplinary technical projects.
        </p>

        <div className="mt-20 space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.8 }}
              className="bg-[#151515] border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500 transition-all"
            >
              <div className="flex gap-6">
                <div className="text-purple-400">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-purple-400 mt-2">
                    {item.company}
                  </p>

                  <p className="text-gray-400 mt-5 leading-8">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}