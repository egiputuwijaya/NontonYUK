"use client";
import { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import * as motion from "motion/react-client";

export default function FilmList() {
  const [genre, setGenre] = useState("");
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchFilmByGenre = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${genre}`
        );
        const data = await res.json();
        setFilms(data.results || []);
      } catch (error) {
        console.log("Gagal mengambil data film", error);
      }
    };
    fetchFilmByGenre();
  }, [genre]);

  const handleSearch = async (e) => {
    e.preventDefault(); // penting
    if (!search.trim()) return;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${search}`
      );
      const data = await res.json();
      console.log(data);
      setSearchResults(data.results || []);
    } catch (error) {
      console.log("Gagal mencari data film", error);
    }
  };

  const handleOpenModal = (film) => {
    setSelectedFilm(film);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFilm(null);
  };

  const filmList = searchResults.length > 0 ? searchResults : films;

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
      className="flex flex-col justify-center"
    >
      <div className="md:px-40">
        <div className="py-10">
          <form
            onSubmit={handleSearch}
            className="text-2xl py-2 px-5 bg-gray-500 rounded-2xl border"
          >
            <input
              type="text"
              name="search"
              value={search}
              placeholder="Search Film"
              onChange={(e) => setSearch(e.target.value)}
              className="focus:outline-none bg-transparent text-white"
            />
          </form>
        </div>

        {/* Grid Film */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
          {filmList.map((film) => (
            <div
              key={film.id}
              className="flex flex-col gap-5 p-4 rounded-2xl shadow "
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                className="w-full h-auto cursor-pointer hover:scale-105 transition duration-300"
                onClick={() => handleOpenModal(film)}
              />
              <div
                className="flex justify-center hover:scale-105 transition duration-300"
                style={{ backgroundColor: "#8A0000" }}
              >
                <button
                  className="py-2 md:px-10 text-center font-semibold "
                  onClick={() => handleOpenModal(film)}
                >
                  Read Synopsis
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {showModal && selectedFilm && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center"
          >
            <div className="bg-black text-white rounded-xl shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-100 relative">
              {/* Tombol Close */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-100 hover:text-red-600 text-3xl font-bold focus:outline-none"
              >
                &times;
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={`https://image.tmdb.org/t/p/w300${selectedFilm.poster_path}`}
                  alt={selectedFilm.title}
                  className="rounded-lg w-full md:w-[40%] object-cover"
                />
                <div className="flex flex-col gap-5">
                  <div className="">
                    <h2 className="text-3xl font-bold mb-2 pt-8">
                      {selectedFilm.title}
                    </h2>
                    <p className="text-sm text-gray-200 mb-4">
                      <strong>Release Date:</strong> {selectedFilm.release_date}
                    </p>
                    <div className="flex flex-row items-center gap-2 pb-5">
                      <IoStar className="text-orange-500" />
                      <p>{selectedFilm.vote_average}</p>
                    </div>
                    <p className="text-gray-300 text-justify leading-relaxed">
                      {selectedFilm.overview || "Deskripsi tidak tersedia."}
                    </p>
                  </div>
                  <button
                    className="py-1 hover:scale-105 transition duration-300"
                    style={{ backgroundColor: "#8A0000" }}
                  >
                    Show on Netflix
                  </button>
                  <button
                    className="py-1 hover:scale-105 transition duration-300"
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
    </motion.div>
  );
}
