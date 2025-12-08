export interface Movie {
  id: number;
  poster_path?: string | null;
  backdrop_path?: string | null;
  title?: string;
  name?: string;
  overview?: string | null;
  release_date?: string;
  vote_average?: number;
}
