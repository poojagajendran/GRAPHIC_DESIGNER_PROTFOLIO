import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_x4ghsca",
        "template_tpr0fx6",
        form.current,
        "raIDXcqkbq5gEovrb"
      );

      alert("✅ Message sent successfully!");

      form.current.reset();
    } catch (error) {
      console.error(error);

      alert("❌ Unable to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-[#080808] text-white py-24 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-5xl font-bold text-center">
            Contact <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-center text-gray-400 mt-5">
            Feel free to contact me for internships, freelance projects,
            collaborations or any opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4 items-center">
                <div className="bg-purple-600 p-4 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <h4>Email</h4>
                  <p className="text-gray-400">
                    poojagajendran91@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="bg-purple-600 p-4 rounded-full">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4>Phone</h4>
                  <p className="text-gray-400">
                    +91 79045 70755
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="bg-purple-600 p-4 rounded-full">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4>Location</h4>
                  <p className="text-gray-400">
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <a
                href="https://www.linkedin.com/in/poojagajendran1010?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1a1a1a] p-4 rounded-full hover:bg-purple-600"
              >
                <FaLinkedin />
              </a>

              
            </div>

          </div>

          {/* Right */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#151515] rounded-3xl p-8 border border-purple-500/20"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-[#222] p-4 rounded-xl mb-5 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-[#222] p-4 rounded-xl mb-5 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-[#222] p-4 rounded-xl mb-5 outline-none"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-[#222] p-4 rounded-xl mb-6 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}
