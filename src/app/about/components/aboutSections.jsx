import * as motion from "motion/react-client";

export default function AboutSections() {
  return (
    <div
      className="py-20"
      style={{
        background:
          "linear-gradient(to bottom, #000000, #121212, #1a1a1a, #000000)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.3 }}
        className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-14"
      >
        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-whit"
        >
          About
        </motion.h1>

        {/* Section 1 */}
        <div className="backdrop-blur-md bg-[#212121]/70 border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:shadow-red-700/40">
          <p className="text-center text-lg md:text-2xl leading-relaxed text-gray-200">
            <span className="font-bold text-white">
              Nonton<span className="text-red-700">YUK</span>
            </span>{" "}
            is a global movie recommendation platform designed to help you
            discover the perfect film anytime, anywhere. Whether you're looking
            for a feel-good comedy, a mind-bending thriller, or a deeply
            emotional drama, we've got you covered.
          </p>
        </div>

        {/* Section 2 */}
        <div className="backdrop-blur-md bg-[#212121]/70 border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:shadow-red-700/40">
          <p className="text-center text-lg md:text-2xl leading-relaxed text-gray-200">
            <span className="font-bold text-white">
              Nonton<span className="text-red-700">YUK</span>
            </span>{" "}
            brings together the best of world cinema. Our curated collection
            spans Hollywood blockbusters, Asian dramas, European classics, and
            indie masterpieces—because great stories deserve to be shared across
            cultures.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
