import { Routes } from '@angular/router';
import { MovieListComponent } from './pages/movies/movie-list/movie-list.component';
import { PipelineComponent } from './pages/pipeline/pipeline.component';

export const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'pipeline',
    component: PipelineComponent,
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
