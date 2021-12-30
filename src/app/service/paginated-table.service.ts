import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaginatedTableService {

  private url = "https://localhost:44336/api/UserValues";

  constructor(private http:HttpClient) { 
  
  }

  getData():Observable<Object>{  
    return this.http.get(this.url).pipe(
      map(response => response)
    );
  }
}
