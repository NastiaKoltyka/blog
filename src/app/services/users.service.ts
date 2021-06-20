import { Injectable } from '@angular/core';

import{User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[]
  constructor() {
    this.users = [
      new User('Admin', 'Admin', 'Admin', 'admin', 'male', 'admin@gmail.com'),
      new User('Ivan', 'Ivanov', 'Ivan666', '123456', 'male', 'vanLove@gmail.com'),
      new User('Lucifer', 'Morningstar', 'Lucifer', '666', 'male', 'Samuel@gmail.com'),
      new User('Anastasiia', 'Koltyka', 'Nastia', '1234', 'female', 'nastia.k@gmail.com')
    ];
  }

  checkLogin(login: string, password: string): boolean {
    let result: User | undefined = this.users.find(user => user.login === login && user.password === password);
    return result != undefined;
  }

  userExist(login: string): boolean {
    let result: User | undefined = this.users.find(user => user.login === login);
    return result != undefined;
  }

  addUser(name: string, surname: string, login: string, password: string, sex: string, mail: string): void {
    this.users.push(new User(name, surname, login, password, sex, mail));
  }

  getName(login: string): string {
    let result: User | undefined = this.users.find(user => user.login === login);
    if (result === undefined) {
      return '';
    }
    return result.name;
  }

}
