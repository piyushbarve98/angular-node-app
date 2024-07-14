import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'https://backend:3000/data' // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getFoodItems(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
