import { Injectable } from '@angular/core';
import { IUser } from './../../interfaces/user';
import { IProduct } from './../../interfaces/product';
import { ICart } from '../../interfaces/cart';
import { ICartSession } from '../../interfaces/cart-session';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CartSessionDataService {
  private _rootUrl: string = 'http://localhost:8080/users';


  constructor(private http: HttpClient) { }



  getCartSessionByIdViaREST(username: string, cartSession_id: number): Observable<ICartSession> {
    return this.http.get<ICartSession>(`${this._rootUrl}/${username}/cartsession/${cartSession_id}`);
  }

  getCartSessionsByUsernameViaREST(username: string): Observable<ICartSession> {
    return this.http.get<ICartSession>(`${this._rootUrl}/${username}/cartsession`);
  }

  getAllCartSessionsViaREST(): Observable<ICartSession[]> {
    return this.http.get<ICartSession[]>(`${this._rootUrl}/cartsessions/all`);
  }

  createCartSession(username: string, cartSession: ICartSession): Observable<ICartSession> {
    return this.http.post<ICartSession>(`${this._rootUrl}/${username}/cartsession`, cartSession);
  }

  updateCartSessionViaREST(username: string, cartSession_id: number, cartSession: ICartSession): Observable<ICartSession> {
    return this.http.put<ICartSession>(`${this._rootUrl}/${username}/cartsession/${cartSession_id}`, cartSession);
  }

  deleteCartSession(username: string, cartSession_id: number): Observable<ICartSession> {
    return this.http.delete<ICartSession>(`${this._rootUrl}/${username}/cartsession/${cartSession_id}`);
  }

}
