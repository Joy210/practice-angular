import { Component, inject } from '@angular/core';
import { MovieDetails, MovieGenre } from '../../../lib/interfaces/movie';
import { MovieService } from '../../../lib/services/movie/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  private movieService = inject(MovieService);

  movies: MovieDetails[] = [];
  movieGenre: MovieGenre[] = [];

  ngOnInit(): void {
    this.loadMovies();
    this.loadMovieGenre();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (data: any) => {
        // data.results as MovieDetail[]; show propery in html component
        this.movies = data.results as MovieDetails[];

        console.log(this.movies);
        console.log('Movie fetched successfully');
      },
      error(err) {
        console.log('Error fetching posts: ', err);
      },
    });
  }

  loadMovieGenre() {
    this.movieService.getMovieGenres().subscribe({
      next: (data: any) => {
        this.movieGenre = data.genres;

        console.log(this.movieGenre);
        console.log('Movie Genre fetched successfully');
      },
      error(err) {
        console.log('Error fetching posts: ', err);
      },
    });
  }
}
