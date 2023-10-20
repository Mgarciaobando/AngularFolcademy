import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  key: string = "bafa2c9c2fcedf210974002914ca8432";

  apiUrl: string = 'https://api.themoviedb.org/3';

  token: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWZhMmM5YzJmY2VkZjIxMDk3NDAwMjkxNGNhODQzMiIsInN1YiI6IjY1MmZlN2JmYTgwMjM2MDBjMzE2ODE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._kY1TXXjn00yS9DepRfh5Z1FagXirtsDSPnSVpMOUWo";

  constructor(
    private _https: HttpClient
  ) { }

  getTrending() {
    let params = { language: 'es-ES' };
    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${this.token}`
    }
    return this._https.get(this.apiUrl + '/trending/all/week', {
      headers : headers,
      params : params
    });
  }
}