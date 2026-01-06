import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private apiUrl = "http://localhost:3000/movies";
  constructor(private httpClient : HttpClient) { }

  // CREATE
  createMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.apiUrl, movie);
  }

  // READ - Get all movies
  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiUrl);
  }

  // READ - Get movie by id
  getMovieById(id: number): Observable<Movie> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Movie>(url);
  }

  // UPDATE
  updateMovie(movie: Movie): Observable<Movie> {
    const url = `${this.apiUrl}/${movie.id}`;
    return this.httpClient.put<Movie>(url, movie);
  }

  // DELETE
  deleteMovie(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}

