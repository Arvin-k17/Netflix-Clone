import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { WildcardComponent } from './core/components/wildcard/wildcard.component';
import { TvShowsComponent } from './shared/components/tv-shows/tv-shows.component';
import { PopularMoviesComponent } from './shared/components/popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './shared/components/upcoming-movies/upcoming-movies.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'tv-shows',
    component:TvShowsComponent
  },
  {
    path:'popular-movies',
    component:PopularMoviesComponent
  },
  {
    path:'upcoming-movies',
    component:UpcomingMoviesComponent
  },

  {
    path: '**',
    component:WildcardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
