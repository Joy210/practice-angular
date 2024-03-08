import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

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
}
