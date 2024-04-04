import { Routes } from '@angular/router';
import { MovieListComponent } from './pages/movies/movie-list/movie-list.component';
import { PipelineComponent } from './pages/pipeline/pipeline.component';
import { TemplateFormComponent } from './lib/components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './lib/components/forms/reactive-form/reactive-form.component';

export const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'pipeline',
    component: PipelineComponent,
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
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
