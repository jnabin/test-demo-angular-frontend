import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = "https://localhost:44336/api/Company";

  constructor(private http:HttpClient) { 
  
  }

  getComapany(){  
    return this.http.get(this.url).pipe(
      map(response => response)
    );
  }

  getuserByComapny(id:number){  
    return this.http.get(this.url+'/GetUser-By-CompanyId/'+id).pipe(
      map(response => response)
    );
  }
}
