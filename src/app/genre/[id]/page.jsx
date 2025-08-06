"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function FilmDetailsPage() {
  const { id } = useParams();
  const [films, setFilms] = useState([]);
  const [genreName, setGenreName] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchFilmByGenre() {
      try {
        // Ambil film berdasarkan genre
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${id}&language=en-US`
        );
        const data = await res.json();
        setFilms(data.results); // hasil berupa array

        // Ambil nama genre
        const genreRes = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        );
        const genreData = await genreRes.json();
        const genre = genreData.genres.find((g) => g.id.toString() === id);
        setGenreName(genre?.name || "Unknown Genre");
      } catch (error) {
        console.log("Gagal mengambil film", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchFilmByGenre();
    }
  }, [id]);

  const handleOpenModal = (film) => {
    setSelectedFilm(film);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFilm(null);
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="px-3 md:px-30">
      <div className="p-4 text-white">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold mb-4">{genreName}</h1>
          <Link href="/genre" className="text-xm hover:text-red-700 ">
            Back
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {films.map((film) => (
            <div key={film.id} className="flex flex-col">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                className="rounded mb-2 hover:scale-105 transition duration-300"
                onClick={() => handleOpenModal(film)}
              />

              <div
                className="flex justify-center hover:scale-105 transition duration-300"
                style={{ backgroundColor: "#8A0000" }}
              >
                <button
                  className="py-2 px-10 text-center font-semibold"
                  onClick={() => handleOpenModal(film)}
                >
                  Read Synopsis
                </button>
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
                          className="py-1 hover:scale-105 transition duration-300"
                          style={{ backgroundColor: "#8A0000" }}
                        >
                          Show on Netflix
                        </button>
                        <button
                          className="py-1 hover:scale-105 transition duration-300 "
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
      </div>
    </div>
  );
}
