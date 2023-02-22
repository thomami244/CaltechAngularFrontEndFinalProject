// import { Observable } from 'rxjs/Observable';

import { IUser } from './../../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/retry';
// import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

  private _rootUrl: string = 'http://localhost:8080/users';
  // private _postsUrl: string = 'http://jsonplaceholder.typicode.com/posts';
  // private prop: string = 'foo';
  // public propChanged: BehaviorSubject<string> = new BehaviorSubject<string>(this.prop);

  private _users: IUser[] = [
    { id: 1, username: 'JohnDoe', email: 'john.doe@example.com' },
    { id: 2, username: 'JaneDoe', email: 'jane.doe@example.com' },
    { id: 3, username: 'JacobRiglin', email: 'jacob.riglin@example.com' },
    { id: 4, username: 'SamKolder', email: 'sam.kolder@example.com' },
    { id: 5, username: 'JeremyJauncey', email: 'jeremy.jauncey@example.com' },
  ];

  constructor(private http: HttpClient) { }

  getUsers(): IUser[] {
    return this._users;
  }

  addUser(user: IUser) {
    this._users.push(user);
  }

  getUserById(id: number): IUser {
    return this._users.filter(user => user.id === id)[0];
  }

  getUserByIdViaREST(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this._rootUrl}/${id}`);
  }

  getUsersViaREST(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this._rootUrl}/all`);


    // let headers = new HttpHeaders().set('Authorization', 'Bearer your-access-token-here');
    // return this.http.get<IUser[]>(`${this._rootUrl}/all`, { headers })
    //   .pipe(
    //     map((users:  IUser[]) => {
    //     return users.map((user: IUser) => {
    //       return {
    //         id: user.id,
    //         username: user.username,
    //         password: user.password,
    //         // email: user.email
    //       }
    //     })
    //   }));
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._rootUrl, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this._rootUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this._rootUrl}/${id}`);
  }

  // getPostsByUser(id: number): Observable<any> {
  //   let params = new HttpParams().set('userId', id.toString());
  //   return this.http.get(`${this._postsUrl}`, { params })
  //     .retry(3)
  //     .catch(err => {
  //       console.log('Got an error as : ', err);
  //       return err;
  //     });
  // }

  // getProp(): string {
  //   return this.prop;
  // }

  // setProp(prop: string) {
  //   this.prop = prop;
  //   this.propChanged.next(this.prop);
  // }
}
