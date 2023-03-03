import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
