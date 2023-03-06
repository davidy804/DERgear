import { Injectable } from '@angular/core';
import { MainModel } from '../shared/main-model';
import { AllItems } from '../shared/all-items';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AllService {

  private allUrl = 'api/AllItems';

  constructor(private http: HttpClient) { }

  getAlls(): Observable<MainModel[]>{
    return this.http.get<MainModel[]>(this.allUrl);
  }

  getAll(id: any): Observable<MainModel>{
    const url = `${this.allUrl}/${id}`;
    return this.http.get<MainModel>(url);
  }

  returnAlls(): MainModel[] {
    return AllItems;
  }

  returnAll(id: any): MainModel {
    return AllItems.filter(all => all.id === id)[0];
  }

}
