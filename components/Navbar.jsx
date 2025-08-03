import Link from "next/link";
import * as motion from "motion/react-client";

export default function Navbar() {
  return (
    <div className="bg-black">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="flex flex-row justify-between px-30 py-8"
      >
        <h1 className="font-bold text-4xl">
          Nonton<span className="text-red-700">YUK</span>
        </h1>
        <div className="flex flex-row gap-20 px-96">
          <Link href="/" className="text-xl hover:text-red-700">
            HOME
          </Link>
          <Link href="/gendre" className="text-xl hover:text-red-700">
            GENDRE
          </Link>
          <Link href="/about" className="text-xl hover:text-red-700">
            ABOUT
          </Link>
          <Link href="/about#contact" lassName="text-xl hover:text-red-700">
            CONTACT
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
