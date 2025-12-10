import type { Movie } from "../types/movie";

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: "application/json",
    },
  });

  if (!res.ok) {
    console.error("TMDB API error:", res.status);
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  return data.results || [];
};
