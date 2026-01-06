import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private apiUrl = "http://localhost:3000/users";
  constructor(private httpClient : HttpClient) { }

  login(email: string, password: string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl, {
      params: {
        email: email.trim(),
        password: password.trim()
      }
    });
  }
  

     // READ - Get all movies
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
