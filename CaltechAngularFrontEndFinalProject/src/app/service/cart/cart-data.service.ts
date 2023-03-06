import { Injectable } from '@angular/core';

import { IUser } from './../../interfaces/user';
import { IProduct } from './../../interfaces/product';
import { ICart } from '../../interfaces/cart';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CartDataService {
  private _rootUrl: string = 'http://localhost:8080/users';


  constructor(private http: HttpClient) { }

  getCarts(): ICart[] {
    return this._carts;
  }

  addCart(cart: ICart) {
    this._cart.push(cart);
  }

  getCartById(id: number): ICart {
    return this._cart.filter(cart => cart.id === id)[0];
  }

  getCartByIdViaREST(id: number): Observable<ICart> {
    return this.http.get<ICart>(`${this._rootUrl}/${id}`);
  }

  getCartsViaREST(): Observable<ICart[]> {
    return this.http.get<ICart[]>(`${this._rootUrl}/carts/all`);
  }

  createCart(cart: ICart): Observable<ICart> {
    return this.http.post<ICart>(this._rootUrl, cart);
  }

  updateCart(user: ICart): Observable<ICart> {
    return this.http.put<ICart>(`${this._rootUrl}/${cart.id}`, cart);
  }

  deleteCart(id: number): Observable<ICart> {
    return this.http.delete<ICart>(`${this._rootUrl}/${id}`);
  }

}
