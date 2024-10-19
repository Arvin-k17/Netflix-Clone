import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { MovieService } from 'src/app/shared/services/movie.service';
import { IVideoContent } from 'src/app/shared/models/video-content';
import { Observable, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  auth = inject(AuthService);
  movieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name ;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;
  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();

  id: any = 889737;
  // id :any =533535;
  recieveId(event: any) {
    this.id = event
    this.bannerDetail$ = this.movieService.getBannerDetail(this.id);
    this.bannerVideo$ = this.movieService.getBannerVideo(this.id);
    console.log(this.bannerVideo$);
    
    console.log(this.id);

  }



  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  // ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows1(),
    // this.movieService.getRatedMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies1(),
    this.movieService.getPopularMovies1(),
    this.movieService.getTopRated()
  ];
  ngOnInit(): void {
    forkJoin(this.sources)
      .pipe(
        map(([movies, tvShows, nowPlaying, upcoming, popular, topRated]) => {
          this.bannerDetail$ = this.movieService.getBannerDetail(movies.results[0].id);
          this.bannerVideo$ = this.movieService.getBannerVideo(movies.results[0].id);
          return { movies, tvShows, nowPlaying, upcoming, popular, topRated }
        })
      ).subscribe((res: any) => {
        this.movies = res.movies.results as IVideoContent[];
        this.tvShows = res.tvShows.results as IVideoContent[];
        console.log(res);

        // this.ratedMovies = res.ratedMovies.results as IVideoContent[];
        this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
        this.upcomingMovies = res.upcoming.results as IVideoContent[];
        this.popularMovies = res.popular.results as IVideoContent[];
        this.topRatedMovies = res.topRated.results as IVideoContent[];

      })
  }

  singOut() {
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
