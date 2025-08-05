const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// mengambil gendre film
export async function fetchGenres() {
  try {
    const res = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.log("Gagal mengambil genre", error);
    return [];
  }
}

// mengambil film berdasarkan gendre
export async function fetchFilmByGenre(genreId) {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}`
    );
    const data = await res.json();
    return data.results.slice(0,10);
  } catch (error) {
    console.log("Gagal mengambil film", error);
    return [];
  }
}
