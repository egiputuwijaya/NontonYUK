"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchFilmByGenre } from "../../../../lib/tmdb";

export default function GenrePage() {
  const params = useParams(); // Ambil parameter dinamis dari URL
  const searchParams = useSearchParams(); // Ambil query string seperti ?name=action
  const id = params?.id;
  const name = searchParams?.get("name");

  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        if (id) {
          const data = await fetchFilmByGenre(id);
          setFilms(data);
        }
      } catch (error) {
        console.error("Gagal mengambil film:", error);
      }
    };

    getFilms();
  }, [id]);

  if (!id || !films) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Genre: {name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {films.map((film) => (
          <div key={film.id} className="bg-gray-800 p-2 rounded">
            <button>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                className="rounded mb-2"
              />
            </button>
            <p className="text-sm">{film.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
