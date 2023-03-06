import { Injectable } from '@angular/core';
import { MainModel } from '../shared/main-model';
import { MainItems } from '../shared/main-items';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private mainUrl = 'api/MainItems';

  constructor(private http: HttpClient) { }

  getMains(): Observable<MainModel[]>{
    return this.http.get<MainModel[]>(this.mainUrl);
  }

  getMain(id: any): Observable<MainModel>{
    const url = `${this.mainUrl}/${id}`;
    return this.http.get<MainModel>(url);
  }

  returnMains(): MainModel[] {
    return MainItems;
  }

  returnMain(id: any): MainModel {
    return MainItems.filter(main => main.id === id)[0];
  }

}
