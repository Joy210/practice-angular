import { Routes } from '@angular/router';
import { MovieListComponent } from './pages/movies/movie-list/movie-list.component';

export const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },

  // {
  //   path: '',
  //   redirectTo: '',
  //   component: '',
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: '',
  //       component: '',
  //     },
  //   ],
  // },
];
