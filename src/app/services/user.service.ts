import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    api = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(this.api);
  }
}
