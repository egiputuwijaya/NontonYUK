"use client";
import { useState, useEffect } from "react";

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
    <div className="px-40">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {filmList.map((film) => (
          <div key={film.id} className="bg-gray-700 p-4 rounded-2xl shadow">
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
              className="w-full h-auto rounded-2xl cursor-pointer"
              onClick={() => handleOpenModal(film)}
            />
            <h2 className="text-xl pt-2 font-semibold text-center">
              {film.title}
            </h2>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && selectedFilm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 w-11/12 md:w-1/2 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedFilm.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedFilm.poster_path}`}
              alt={selectedFilm.title}
              className="w-full rounded mb-4"
            />
            <p><strong>Release Date:</strong> {selectedFilm.release_date}</p>
            <p className="mt-2">{selectedFilm.overview || "Deskripsi tidak tersedia."}</p>
          </div>
        </div>
      )}
    </div>
  );
}
