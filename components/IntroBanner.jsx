import * as motion from "motion/react-client";

export default function IntroBanner() {
  return (
    <div className="bg-black  pt-20">
      {/* bagian jumlah prestasi  */}
      <div className="" style={{ backgroundColor: "#222831" }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          className="flex flex-row justify-between px-60 py-10"
        >
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold text-center">20+</h1>
            <p className="text-xl">Movie Gendres</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold text-center">+5000</h1>
            <p className="text-xl">Film in Our Library</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold text-center">1000+</h1>
            <p className="text-xl">Recommendations Served</p>
          </div>
        </motion.div>
      </div>

      {/* bagian seluruh dunia */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className="flex flex-row gap-30 px-50 pt-20"
      >
        <div className="w-1/2">
          <h1 className="text-6xl font-semibold">
            WE HAVE MANY RECOMMENDATIONS FILM AROUND THE WORLD FOR EVERY GENDRES
          </h1>
        </div>
        <div className="w-1/2 flex flex-col">
          <h1 className="text-xl">
            From edge of your seat thrillers to heartwarming romances, inspiring
            documentaries to laugh outloud comedies{" "}
            <span className="font-semibold">
              Nonton<span className="text-red-700">Yuk</span>
            </span>{" "}
            brings you carefully curated film recommendations from across the
            globe.
          </h1>
          <div className="py-8">
            <a
              href=""
              className="px-20 py-3 text-xl"
              style={{ backgroundColor: "#8A0000" }}
            >
              Search Film{" "}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
