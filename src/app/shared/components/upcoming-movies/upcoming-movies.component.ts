import { Component, inject, Input } from '@angular/core';
import { IVideoContent } from '../../models/video-content';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent {
  movieService = inject(MovieService);
  upcomingMovies1: IVideoContent[] = [];
  upcomingMovies2: IVideoContent[] = [];
  upcomingMovies3: IVideoContent[] = [];
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;


  ngAfterViewInit(): void {
    this.movieService.getUpcomingMovies1().subscribe((res: any) => {
      console.log(res.results);
      this.upcomingMovies1 = res.results as IVideoContent[]
    })
    this.movieService.getUpcomingMovies2().subscribe((res: any) => {
      console.log(res.results);
      this.upcomingMovies2 = res.results as IVideoContent[]
    })
    this.movieService.getUpcomingMovies3().subscribe((res: any) => {
      console.log(res.results);
      this.upcomingMovies3 = res.results as IVideoContent[]
    })

  }
}
