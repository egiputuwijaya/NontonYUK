"use client";

import Link from "next/link";
import * as motion from "motion/react-client";

export default function Profile() {
  const film = [
    { img: "/navbar2.png", link: "https://youtu.be/i2yeRM9jcqc" },
    { img: "/navbar3.png", link: "https://youtu.be/HiVzpboRpR0" },
    { img: "/navbar4.png", link: "https://youtu.be/LkUsJMFngiI" },
    { img: "/navbar5.png", link: "https://youtu.be/0uf6QUacVgs" },
    { img: "/navbar6.jpeg", link: "https://youtu.be/mqqft2x_Aa4" },
    { img: "/navbar7.jpeg", link: "https://youtu.be/lwxZiv4aihg" },
    { img: "/navbar8.jpeg", link: "https://youtu.be/rWsnLS0Q7G0" },
    { img: "/navbar9.jpeg", link: "https://youtu.be/MUIqUhSFoyw" },
    { img: "/navbar10.jpeg", link: "https://youtu.be/eHp3MbsCbMg" },
    { img: "/navbar11.jpeg", link: "https://youtu.be/hktzirCnJmQ" },
    { img: "/navbar12.jpeg", link: "https://youtu.be/rBxcF-r9Ibs" },
    { img: "/navbar13.jpeg", link: "https://youtu.be/1ovgxN2VWNc" },
  ];
  return (
    <div className="bg-black relative">
      <div className="">
        <div className="overflow-hidden w-auto">
          <img
            src="/navbar1.png"
            alt=""
            className="object-cover w-full h-[350px] "
          />
          <div className="flex flex-row">
            <img
              src="/navbar2.png"
              alt=""
              className="object-cover w-full h-full"
            />
            <img
              src="/navbar3.png"
              alt=""
              className="object-cover w-full h-full"
            />
            <img
              src="/navbar4.png"
              alt=""
              className="object-cover w-full h-full"
            />
            <img
              src="/navbar5.png"
              alt=""
              className="object-cover w-full h-full"
            />
            <img
              src="/navbar2.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 bg-black/90 w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-row justify-between px-30 py-10"
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
            <Link href="/about#contact" className="text-xl hover:text-red-700">
              CONTACT
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="px-30 py-5"
        >
          <h1 className="text-6xl font-semibold text-center leading-18">
            ONE CLICK AWAY FROM YOUR NEXT FAVORITE MOVIE WITH Nonton
            <span className="text-red-700">YUK</span>
          </h1>
          <p className="text-xl text-center py-3">
            Discover handpicked movie recommendations based on your mood, genre
            preferences, and trending titles no more scrolling endlessly.
          </p>
        </motion.div>
        <div className="relative z-50 w-full px-30 py-5">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="flex flex-row gap-6 flex-wrap justify-center"
          >
            {film.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.img}
                  alt={`film-${index}`}
                  className="w-[200px] h-[300px] object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
