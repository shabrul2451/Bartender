import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class FreeApiService {
  apiUrl = 'https://api.punkapi.com/v2/beers';
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get<ProductModel[]>(this.apiUrl);
  }
}
