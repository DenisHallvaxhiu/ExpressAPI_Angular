import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient:HttpClient) { }
  
  // Each gets their respective info from api

  getHome(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/home")
  }
  getShipping(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/shipping")
  }
  getAbout(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/about")
  }
}
