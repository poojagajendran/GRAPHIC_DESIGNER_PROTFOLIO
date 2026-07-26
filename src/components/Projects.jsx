import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Payment Scheduler",
    category: "UI / UX Design",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&auto=format&fit=crop&q=80",
    description:
      "Designed the complete user interface and branding for a Payment Scheduler application. Created dashboard screens, payment flow, onboarding pages, typography, colour palette, and promotional graphics with a clean, modern design.",
    tools: ["Figma", "Adobe Photoshop", "Canva"],
  },

  {
    title: "Cloud File Storage Platform",
    category: "Dashboard Design",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",
    description:
      "Designed a responsive cloud storage dashboard with file management screens, folder illustrations, landing pages, custom icons, and a modern design system focused on usability.",
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
  },

  {
    title: "Face Recognition Attendance System",
    category: "Mobile & Web UI",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&auto=format&fit=crop&q=80",
    description:
      "Created modern UI screens for login, attendance tracking, analytics, profile management, and reports. Focused on intuitive navigation and professional visual hierarchy.",
    tools: ["Figma", "Adobe Photoshop"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#080808] text-white py-24 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center">
            Featured <span className="text-purple-500">Projects</span>
          </h2>

          <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
            These projects showcase my ability to create modern, user-friendly,
            and visually engaging digital experiences through branding,
            interface design, and creative problem solving.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-[#151515] rounded-3xl overflow-hidden border border-purple-500/20 shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition duration-700 hover:scale-110"
                />

              </div>

              <div className="p-6">

                <span className="bg-purple-600 px-4 py-2 rounded-full text-sm">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button className="mt-6 flex items-center gap-2 text-purple-400 hover:text-purple-300 transition">
                  View Design
                  <FaArrowRight />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}