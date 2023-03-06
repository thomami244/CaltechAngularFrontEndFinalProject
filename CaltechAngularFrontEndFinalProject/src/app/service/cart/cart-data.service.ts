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



  getCartByIdViaREST(username: string, cart_id: number): Observable<ICart> {
    return this.http.get<ICart>(`${this._rootUrl}/${username}/cart/${cart_id}`);
  }

  getCartsByUsernameViaREST(username: string): Observable<ICart> {
    return this.http.get<ICart>(`${this._rootUrl}/${username}/cart`);
  }

  getAllCartsViaREST(): Observable<ICart[]> {
    return this.http.get<ICart[]>(`${this._rootUrl}/carts/all`);
  }

  createCart(username: string, cart: ICart): Observable<ICart> {
    return this.http.post<ICart>(`${this._rootUrl}/${username}/cart`, cart);
  }

  updateCartViaREST(username: string, cart_id: number, cart: ICart): Observable<ICart> {
    return this.http.put<ICart>(`${this._rootUrl}/${username}/cart/${cart_id}`, cart);
  }

  deleteCart(username: string, cart_id: number): Observable<ICart> {
    return this.http.delete<ICart>(`${this._rootUrl}/${username}/cart/${cart_id}`);
  }

}
