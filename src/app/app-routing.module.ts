import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './appRoutes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    enableTracing: false,
    scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
