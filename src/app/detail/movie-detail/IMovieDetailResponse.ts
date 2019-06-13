export interface IMovieDetailResponse {
  "adult":boolean;
  "backdrop_path":string;
  "belongs_to_collection":any;
  "budget":number;
  "genres":IGenre;
  "homepage":string;
  "id":number;
  "imdb_id":string;
  "original_language":string;
  "original_title":string;
  "overview":string;
  "popularity":number;
  "poster_path":number;
  "production_companies":any[];
  "release_date":string;
  "revenue":number;
  "runtime":number;
  "spoken_languages":any[];
  "status":string;
  "tagline":string;
  "title":string;
  "video":false;
  "vote_average":number;
  "vote_count":number;
  "videos":IVideo
}
export interface IVideo {
  "results":IVideoResult
}
export interface IVideoResult {
  "id":string;
  "iso_639_1":string;
  "iso_3166_1":string;
  "key":string;
  "name":string;
  "site":string;
  "size":number;
  "type":string
}

export interface IGenre {
  "id":number;
  "name":string
}
