import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment.development';
import { MovieDetails } from '../../interfaces/movie';

const apiUrl = environment.apiUrl;
const apikey = environment.apikey;
const movieGenreUrl = environment.movieGenreUrl;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() {}

  getMovies(): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${apiUrl}?api_key=${apikey}`);
  }

  getMovieGenres() {
    return this.http.get(`${movieGenreUrl}?api_key=${apikey}`);
  }

  getMovieDetails() {}
}
