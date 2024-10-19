import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const options = {
  params:{
    include_adult:'false',
    include_video:'true',
    language:'en-US',
    page:'1',
    sort_by:'popularity.desc'
  },
  headers:{
    accept:'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjA1ZGU4OTg0ZjRjZjNhNzE3ZmRmNzgzNmUxMTJlNiIsIm5iZiI6MTcyNzUzNDIwMy40NzYyNCwic3ViIjoiNjZmODEwNWIwYTEyMjE1NjMxY2MxYzViIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9._0VtLN9Jt49hnH1g-jqCMIS7J1t1MUNVxVhEdGT5B_c'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  http = inject(HttpClient)

  constructor() { }

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  }
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
  getTvShows1() {
    options.params.page="1"
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }
  getTvShows2() {
    options.params.page="2"
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }
  getTvShows3() {
    options.params.page="3"
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }
///////////////////////////////////////////////////////////////////////////////////////
  getPopularMovies1() {
    options.params.page="2"
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }
  getPopularMovies2() {
     options.params.page="1"
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }
  getPopularMovies3() {
     options.params.page="3"
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }
  // ////////////////////////////////////////////////////////////////////////////////////////

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }
// //////////////////////////////////////////////////////////////////////////////////////////
  getUpcomingMovies1() {
    options.params.page = '2'
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
  getUpcomingMovies2() {
    options.params.page = '1'
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
  getUpcomingMovies3() {
    options.params.page = '3'
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
// ///////////////////////////////////////////////////////////////////////////// 
}
