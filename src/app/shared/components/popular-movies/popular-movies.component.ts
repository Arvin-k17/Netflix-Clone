import { Component, inject, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IVideoContent } from '../../models/video-content';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent {
  movieService = inject(MovieService);
  popularMovies1: IVideoContent[] = [];
  popularMovies2: IVideoContent[] = [];
  popularMovies3: IVideoContent[] = [];
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;

  ngAfterViewInit(): void {
    this.movieService.getPopularMovies1().subscribe((res: any) => {
      console.log(res);
      this.popularMovies1 = res.results as IVideoContent[]
    })
    this.movieService.getPopularMovies2().subscribe((res: any) => {
      console.log(res);
      this.popularMovies2 = res.results as IVideoContent[]
    })
    this.movieService.getPopularMovies3().subscribe((res: any) => {
      console.log(res);
      this.popularMovies3 = res.results as IVideoContent[]
    })
  }

}
