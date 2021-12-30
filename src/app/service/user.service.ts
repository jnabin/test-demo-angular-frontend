import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://localhost:44336/api/User";

  constructor(private http:HttpClient) { 
  
  }

  getUser(){  
    return this.http.get(this.url);
  }
}
