import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://api.github.com/users';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) : Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${githubUsername}`);
  }

  getUserRepos(
    username: string,
    page: number,
    perPage: number
  ) : Observable<any[]> {
    const userUrl = `${this.baseURL}/${username}/repos?page=${page}&per_page=${perPage}`;
    return this.httpClient.get<any[]>(userUrl);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
