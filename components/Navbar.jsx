"use client";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import * as motion from "motion/react-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className="bg-black">
      {/* tampilan desktop */}
      <div className="hidden md:block">
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

      {/* tampilan desktop */}
      <div className="block md:hidden">
        <div className="flex flex-row justify-between p-3  md:hidden">
          <h1 className="font-bold  text-2xl">
            Nonton<span className="text-red-700">YUK</span>
          </h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
        <div className="">
          {isOpen && (
            <div className="flex flex-col px-3 pb-2">
              <Link
                href="/"
                className="text-xm hover:text-red-700 hover:bg-gray-300"
              >
                HOME
              </Link>
              <Link
                href="/gendre"
                className="text-xm hover:text-red-700 hover:bg-gray-300"
              >
                GENDRE
              </Link>
              <Link
                href="/about"
                className="text-xm hover:text-red-700 hover:bg-gray-300"
              >
                ABOUT
              </Link>
              <Link
                href="/about#contact"
                className="text-xm hover:text-red-700 hover:bg-gray-300"
              >
                CONTACT
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
