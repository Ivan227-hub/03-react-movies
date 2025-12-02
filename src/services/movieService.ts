import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response: AxiosResponse<FetchMoviesResponse> = await axios.get(
    `${API_URL}/search/movie`,
    {
      params: {
        query,
        include_adult: false,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  return response.data.results;
};
