import { Component, Input, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { MovieDetails } from '../../../lib/interfaces/movie';
import { GeneralService } from '../../../lib/services/general.service';
import { MovieService } from '../../../lib/services/movie/movie.service';

const imgUrl = environment.imgUrl;

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: any;
  @Input() getFullImgUrl(posterPath: string): String {
    return imgUrl + posterPath;
  }

  private movieService = inject(MovieService);

  movies: MovieDetails[] = [];

  constructor(public generalService: GeneralService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (data: any) => {
        data.results as MovieDetails[];
        this.movies = data.results;

        // console.log(this.movies);
        // console.log('Movie fetched successfully');
      },
      error(err) {
        console.log('Error fetching posts: ', err);
      },
    });
  }

  getMovieDetails(id: number, e: Event) {
    e.preventDefault();

    this.generalService.showModal = true;
    this.generalService.modalContent = this.movies.find((movie: any) => {
      return movie.id === id;
    });

    // console.log('MovieDetails: ', this.generalService.modalContent);
  }
}
