import { motion } from "framer-motion";
import {
  FaPalette,
  FaPaintBrush,
  FaImage,
  FaLaptopCode,
  FaPenNib,
  FaCamera,
  FaDesktop,
  FaStar,
} from "react-icons/fa";

const skills = [
  { name: "Adobe Photoshop", level: 90 },
  { name: "Adobe Illustrator", level: 88 },
  { name: "Figma", level: 90 },
  { name: "Canva", level: 95 },
  { name: "Brand Identity", level: 92 },
  { name: "Logo Design", level: 90 },
  { name: "Social Media Design", level: 94 },
  { name: "UI Design", level: 85 },
];

const tools = [
  { icon: <FaPalette size={35} />, title: "Adobe Photoshop" },
  { icon: <FaPenNib size={35} />, title: "Adobe Illustrator" },
  { icon: <FaDesktop size={35} />, title: "Figma" },
  { icon: <FaCamera size={35} />, title: "Canva" },
  { icon: <FaPaintBrush size={35} />, title: "Brand Identity" },
  { icon: <FaImage size={35} />, title: "Social Media" },
  { icon: <FaLaptopCode size={35} />, title: "UI Design" },
  { icon: <FaStar size={35} />, title: "Creative Design" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#080808] text-white py-24 px-8 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-center">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          I specialize in branding, UI design, logo creation, posters, and
          social media creatives using modern design tools.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          <div>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {tools.map((tool) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={tool.title}
                className="bg-[#151515] rounded-2xl p-8 border border-purple-500/20 text-center"
              >
                <div className="text-purple-400 flex justify-center mb-4">
                  {tool.icon}
                </div>

                <h3>{tool.title}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}