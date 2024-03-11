import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderComponent, LayoutComponent } from '../../../lib/components';
import { ContainerComponent } from '../../../lib/components/container/container.component';
import { ModalComponent } from '../../../lib/components/modal/modal.component';
import { MovieDetails, MovieGenre } from '../../../lib/interfaces/movie';
import { GeneralService } from '../../../lib/services/general.service';
import { MovieService } from '../../../lib/services/movie/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieCardComponent,
    HeaderComponent,
    LayoutComponent,
    ContainerComponent,
    ModalComponent,
    CommonModule,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  private movieService = inject(MovieService);

  constructor(public generalService: GeneralService) {}

  movies: MovieDetails[] = [];
  movieGenre: MovieGenre[] = [];
  showLoader: boolean = false;

  ngOnInit(): void {
    this.loadMovies();
    this.loadMovieGenre();
  }

  loadMovies() {
    // this.showLoader = true;
    // console.log('Before: ', this.showLoader);

    this.movieService.getMovies().subscribe({
      next: (data: any) => {
        // data.results as MovieDetail[]; show propery in html component
        this.movies = data.results as MovieDetails[];

        // this.showLoader = false;
        // console.log('After: ', this.showLoader);

        // console.log(this.movies);
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

        // console.log(this.movieGenre);
        console.log('Movie Genre fetched successfully');
      },
      error(err) {
        console.log('Error fetching posts: ', err);
      },
    });
  }
}
