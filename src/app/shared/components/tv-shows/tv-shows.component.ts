import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { IVideoContent } from 'src/app/shared/models/video-content';
import { MovieService } from 'src/app/shared/services/movie.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements AfterViewInit {
  movieService = inject(MovieService);
  tvShows1: IVideoContent[] = [];
  tvShows2: IVideoContent[] = [];
  tvShows3: IVideoContent[] = [];
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  
   
  ngAfterViewInit(): void {
    this.movieService.getTvShows1().subscribe((res:any) =>{
      console.log(res.results);
      this.tvShows1 = res.results as IVideoContent[]
    })
    this.movieService.getTvShows2().subscribe((res:any) =>{
      console.log(res.results);
      this.tvShows2 = res.results as IVideoContent[]
    })
    this.movieService.getTvShows3().subscribe((res:any) =>{
      console.log(res.results);
      this.tvShows3 = res.results as IVideoContent[]
    })
    
  }
   



  
}
