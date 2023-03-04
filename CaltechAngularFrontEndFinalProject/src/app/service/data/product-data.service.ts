import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { Product } from 'src/app/list-product/list-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(username :any){
    return this.httpClient.get<Product[]>(`http://localhost:8080/users/${username}/todos`)
  }

 retrieveTodo(username :any, id :number){
    return this.httpClient.get<Product[]>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username: any,id: number,todo: Product){
    return this.httpClient.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }

  createTodo(username: any, todo: Product) {
    return this.httpClient.post(`http://localhost:8080/users/${username}/todos`,todo);
  }

  // retrieveAllUsers(){
  //   return this.httpClient.get<IUser[]>(`http://localhost:8080/users/all`)
  // }
  retrieveAllProducts(){
    return this.httpClient.get<IUser[]>(`http://localhost:8080/products/all`)
  }
}
