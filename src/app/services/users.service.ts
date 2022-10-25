import { HttpClient } from '@angular/common/http';    //to send req to backend
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';                    //to recive res from backend
import { User, UserList } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<UserList>{
    return this.httpClient.get<UserList>('https://dummyjson.com/users');
  }

  getUserByID(id: number): Observable<User>{
    return this.httpClient.get<User>("https://dummyjson.com/users/" + id);
  }

  addUser(user: User): Observable<User>{
    return this.httpClient.post<User>("https://dummyjson.com/users/", user);
  }

  editUser(user: User): Observable<User>{
    return this.httpClient.put<User>(`https://dummyjson.com/users/${user.id}`, user);
  }

  deleteUserByID(id: number): Observable<User>{
    return this.httpClient.delete<User>("https://dummyjson.com/users/" + id);
  }
}
