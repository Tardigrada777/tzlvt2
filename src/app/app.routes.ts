import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/main/main.component').then(
        ({ MainComponent }) => MainComponent
      ),
  },
  {
    path: 'configure',
    loadComponent: () =>
      import('./pages/configure/configure.component').then(
        ({ ConfigureComponent }) => ConfigureComponent
      ),
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./pages/day-results/day-results.component').then(
        ({ DayResultsComponent }) => DayResultsComponent
      ),
  }
];
