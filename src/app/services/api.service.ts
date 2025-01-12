import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5055/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getAuthors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/authors`);
  }

  // Add a new author
  addAuthor(firstname: { name: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/authors`, firstname, { headers: this.getHeaders() });
  }

  getBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/books`);
  }

  addBook(book: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/books`, book, { headers: this.getHeaders() });
  }


  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}
