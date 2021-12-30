import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = "https://localhost:44336/api/Country";

  constructor(private http:HttpClient) { 
  
  }

  getCountry():Observable<Object>{  
    return this.http.get(this.url).pipe(
      map(response => response)
    );
  }
  getCompanyByCountry(id:number){  
    return this.http.get(this.url+'/GetCompanyByCountryId/'+id).pipe(
      map(response => response)
    );
  }
}
