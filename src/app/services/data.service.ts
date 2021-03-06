import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getCats(): Observable<any> {
    return this.http.get('/cats').map(res => res.json());
  }

  addCat(cat): Observable<any> {
    return this.http.post("/cat", JSON.stringify(cat), this.options);
  }

  editCat(cat): Observable<any> {
    return this.http.put(`/cat/${cat._id}`, JSON.stringify(cat), this.options);
  }

  deleteCat(cat): Observable<any> {
    return this.http.delete(`/cat/${cat._id}`, this.options);
  }
  getMelks(): Observable<any> {
    return this.http.get('/melks').map(res => res.json());
  }

  addMelk(melk): Observable<any> {
    return this.http.post("/melk", JSON.stringify(melk), this.options);
  }

  editMelk(melk): Observable<any> {
    return this.http.put(`/melk/${melk._id}`, JSON.stringify(melk), this.options);
  }

  deleteMelk(melk): Observable<any> {
    return this.http.delete(`/melk/${melk._id}`, this.options);
  }


}
