import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL: string = "https://jsonplaceholder.typicode.com/";
  users: User[] = [];

  constructor(private httpClient: HttpClient) {
    this.init();
  }

  async init() {
    this.users = await this.getAllUsers().toPromise();
  }

  getAllUsers() {
    return this.httpClient.get<User[]>(this.API_URL + 'users');
  }

  getUserByID(id) {
    return this.httpClient.get(`${this.API_URL + 'users'}/${id}`);
  }

  createUser(user: User) {
    this.users.push(user);
    return this.httpClient.post(this.API_URL + 'users', JSON.stringify(user));
  }

  updateUser(updatedUser: User) {
    let updateItem = this.users.find(user => user.id == updatedUser.id);
    let index = this.users.indexOf(updateItem);
    this.users[index] = updatedUser;
    return this.httpClient.put(`${this.API_URL + 'users'}/${updatedUser.id}`, JSON.stringify(updatedUser));
  }

  getUsers() {
    return this.users;
  }

  deleteUser(deletedUser: User) {
    this.users = this.users.filter(user => user !== deletedUser);
  }
}
