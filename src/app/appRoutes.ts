import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { AllComponent } from './all/all.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'all', component: AllComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
