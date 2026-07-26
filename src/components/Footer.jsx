import {
  FaLinkedin,
  FaInstagram,
  FaBehance,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-purple-500/20 text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>

            <h2 className="text-4xl font-bold">
              Pooja<span className="text-purple-500">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Passionate Graphic Designer creating modern,
              creative and user-focused visual experiences
              through branding, UI/UX and digital design.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a href="#home" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-purple-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-purple-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-purple-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-purple-400 transition">
                  Experience
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Connect
            </h3>

            <p className="text-gray-400 mb-6">
              Let's connect and create something amazing together.
            </p>

            <div className="flex gap-5">

              <a
                href="https://www.linkedin.com/in/poojagajendran1010?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#151515] flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/_.puja10._?igsh=Y2NxMDU5amx3bTM3"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#151515] flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaInstagram size={22} />
              </a>

             

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Pooja G. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-6 md:mt-0 bg-purple-600 hover:bg-purple-700 transition w-12 h-12 rounded-full flex items-center justify-center"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}