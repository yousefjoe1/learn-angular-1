import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Relative URL if using proxy

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }
}