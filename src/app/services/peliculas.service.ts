import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieDetails } from '../interfaces/movie-details';
import { Cast, CreditResponse } from '../interfaces/credit-response';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url: string = 'https://api.themoviedb.org/3/';
  apiKey: string = 'f4222c3a7d6ea5f68f01da963be50937';
  carteleraPage = 1;
  loading: boolean = false;
  //Primera opcion
  get params() {
    return {
      api_key: this.apiKey,
      language: "es-ES",
      page: this.carteleraPage.toString()
    }
  }

  //o Segunda opcion
  parametros: HttpParams = new HttpParams().set('api_key', this.apiKey).set('language', 'language=es-ES').set('page', this.carteleraPage.toString())

  constructor(private httpClient: HttpClient) {

  }

  getCartelera(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }

    this.loading = true;
    return this.httpClient.get<CarteleraResponse>(`${this.url}movie/now_playing`, { params: this.params }).pipe(map(response => response.results), tap(response => {
      this.carteleraPage += 1;
      this.loading = false;
    }));
  }

  searchMovies(nameMovie: string): Observable<Movie[]> {

    let params = { ...this.params, page: '1', query: nameMovie };

    return this.httpClient.get<CarteleraResponse>(`${this.url}search/movie`, { params }).pipe(map(response => response.results))
  }

  getMovieDetails(idMovie: string) {

    return this.httpClient.get<MovieDetails>(`${this.url}movie/${idMovie}`, { params: this.params }).pipe(catchError(error => of(null)));
  }

  getCast(idMovie): Observable<Cast[]> {

    return this.httpClient.get<CreditResponse>(`${this.url}movie/${idMovie}/credits`, { params: this.params }).pipe(map(response => response.cast), catchError(error => of([])));
  }


}
