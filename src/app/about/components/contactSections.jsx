import { FaFacebookF, FaInstagram, FaEnvelope, FaTiktok } from "react-icons/fa";
import * as motion from "motion/react-client";

export default function ContactSections() {
  return (
    <div className="bg-gradient-to-b from-black via-[#121212] to-black py-20 text-white">
      {/* What Makes Us Different Section */}
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.3 }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <h1 className="text-center text-5xl font-bold mb-12">
          What Makes Us Different
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-red-700/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-red-500">
              🎯 Personalized Picks
            </h3>
            <p className="text-gray-300">
              Get movie suggestions tailored to your mood, interests, and watch
              history — no more scrolling endlessly.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-red-700/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-red-500">
              🌍 Global Library
            </h3>
            <p className="text-gray-300">
              Explore films from every corner of the world — from Hollywood to
              hidden indie gems.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-red-700/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-red-500">
              💡 Smart Suggestions
            </h3>
            <p className="text-gray-300">
              Powered by intelligent algorithms that learn your taste and
              continually improve.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-red-700/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-red-500">
              🕒 Save Time
            </h3>
            <p className="text-gray-300">
              Skip the decision fatigue. We deliver high-quality recommendations
              fast.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-red-700/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-red-500">
              📺 Multi-Platform
            </h3>
            <p className="text-gray-300">
              Whether you're watching on Netflix, Disney+, or Prime — we've got
              you covered.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-red-700/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-red-500">
              🗂 Genre Explorer
            </h3>
            <p className="text-gray-300">
              Dive deep into categories and themes you never thought you'd love.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <section id="contact">
        <div className="pt-32">
          <motion.h1
            initial={{ opacity: 0, y:30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.3 }}
            className="text-center text-5xl font-bold mb-12 "
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.3 }}
            className="flex flex-row flex-wrap justify-center gap-10 max-w-5xl mx-auto px-6"
          >
            {/* Contact Card */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#212121] p-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md w-[260px] border border-white/10"
            >
              <FaFacebookF className="text-blue-500 text-3xl" />
              <span className="text-lg text-gray-200 font-medium">
                Facebook
              </span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#212121] p-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md w-[260px] border border-white/10"
            >
              <FaInstagram className="text-pink-500 text-3xl" />
              <span className="text-lg text-gray-200 font-medium">
                Instagram
              </span>
            </a>

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-4 bg-[#212121] p-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md w-[260px] border border-white/10"
            >
              <FaEnvelope className="text-yellow-400 text-3xl" />
              <span className="text-lg text-gray-200 font-medium">Email</span>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#212121] p-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md w-[260px] border border-white/10"
            >
              <FaTiktok className="text-white text-3xl" />
              <span className="text-lg text-gray-200 font-medium">TikTok</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
