import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';
import { ImagePipe } from './shared/pipes/image.pipe';
import { DescriptionPipe } from './shared/pipes/description.pipe';
import { AuthService } from './shared/services/auth.service';
import { MovieService } from './shared/services/movie.service';
import { WildcardComponent } from './core/components/wildcard/wildcard.component';
import { TvShowsComponent } from './shared/components/tv-shows/tv-shows.component';
import { PopularMoviesComponent } from './shared/components/popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './shared/components/upcoming-movies/upcoming-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavIconComponent } from './shared/components/nav-icon/nav-icon.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
    ImagePipe,
    DescriptionPipe,
    WildcardComponent,
    TvShowsComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
    NavIconComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  
  ],
  providers: [AuthService,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
