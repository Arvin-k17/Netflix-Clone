import { NgFor, NgForOf, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../models/video-content';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { ImagePipe } from '../../pipes/image.pipe';
import { animate, style, transition, trigger } from '@angular/animations';
import { MovieService } from '../../services/movie.service';
@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css'],
  // animations: [
  //   trigger('fade', [
  //     transition('void => *', [
  //       style({ opacity: 0 }),
  //       animate(300, style({ opacity: 1 }))
  //     ])
  //   ])
  // ]
})
export class MovieCarouselComponent implements OnInit, AfterViewInit {
  @Output() passId = new EventEmitter<any>();
  @Input() videoContents: IVideoContent[] = [];
  @Input() title!: string;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  selectedContent: string | null = null;
  constructor() { }
  movieService = inject(MovieService);

  changeBanner(movie:any){
    // console.log(movie.id);
    // return movie.id
    this.passId.emit(movie.id)
    
  }


  

  ngAfterViewInit(): void {
   this.initSwiper();
  }

  ngOnInit() {
  }

  private initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: false,
      loop: false,
      breakpoints: {
        400: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: false,
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: false,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }
  

 

  setHoverMovie(movie: IVideoContent) {
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie() {
    this.selectedContent = null;
  }
}


