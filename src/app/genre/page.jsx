// app/genre/page.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { IoStar } from "react-icons/io5";
import * as motion from "motion/react-client";

async function fetchGenres() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  const data = await res.json();
  return data.genres;
}

async function fetchMoviesByGenre(genreId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  const data = await res.json();
  return data.results.slice(0, 8); // Ambil hanya 10
}

export default function GenrePage() {
  const [genreList, setGenreList] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function loadGenresWithMovies() {
      const genres = await fetchGenres();
      const genreData = await Promise.all(
        genres.map(async (genre) => {
          const movies = await fetchMoviesByGenre(genre.id);
          return { ...genre, movies };
        })
      );
      setGenreList(genreData);
    }

    loadGenresWithMovies();
  }, []);

  const handleOpenModal = (film) => {
    setSelectedFilm(film);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFilm(null);
  };

  return (
    <div className="bg-black overflow-x-hidden">
      <Navbar />
      <div className="bg-black text-white px-3 md:px-30">
        {genreList.map((genre) => (
          <div key={genre.id} className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">{genre.name}</h2>
              <Link href={`/genre/${genre.id}`}>
                <span className="text-red-700 hover:text-white cursor-pointer">
                  See all
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {genre.movies.map((film) => (
                <div key={film.id} className="flex flex-col gap-3">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                    alt={film.title}
                    className="shadow-md hover:scale-105 transition duration-300"
                    onClick={() => handleOpenModal(film)}
                  />
                  <div className="bg-red-800 flex justify-center hover:scale-105 transition duration-300 ">
                    <button
                      className="text-center text-white mt-2 px-2 py-1 font-semibold "
                      onClick={() => handleOpenModal(film)}
                    >
                      Read Synopsis
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {showModal && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="fixed inset-0 bg-black/10 z-[9999] flex items-center justify-center"
              >
                <div className="bg-black/60 text-white rounded-xl shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-100 relative">
                  {/* Tombol Close */}
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 text-gray-100 hover:text-red-600 text-3xl font-bold focus:outline-none"
                  >
                    &times;
                  </button>

                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={`https://image.tmdb.org/t/p/w300${selectedFilm?.poster_path}`}
                      alt={selectedFilm?.title}
                      className="rounded-lg w-full md:w-[40%] object-cover"
                    />
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <h2 className="text-3xl font-bold mb-2 pt-8">
                          {selectedFilm?.title}
                        </h2>
                        <p className="text-sm text-gray-200 mb-4">
                          <strong>Release Date:</strong>{" "}
                          {selectedFilm?.release_date}
                        </p>
                        <div className="flex flex-row items-center gap-2 pb-5">
                          <IoStar className="text-orange-500" />
                          <p>{selectedFilm.vote_average}</p>
                        </div>

                        <p className="text-gray-300 text-justify leading-relaxed">
                          {selectedFilm?.overview ||
                            "Deskripsi tidak tersedia."}
                        </p>
                      </div>
                      <button
                        className="py-1  hover:scale-105 transition duration-300"
                        style={{ backgroundColor: "#8A0000" }}
                      >
                        Show on Netflix
                      </button>
                      <button
                        className="py-1  hover:scale-105 transition duration-300"
                        style={{ backgroundColor: "#8A0000" }}
                      >
                        Show on Youtube
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
