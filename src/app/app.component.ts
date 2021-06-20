import { Component } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blog:boolean;
  registration:boolean;
  login:boolean;
  userName:string;
  name:string;
  constructor(private userService: UsersService) {
    this.blog=false;
    this.registration=false;
    this.login=true;
    this.userName='';
    this.name='';
  }
  showRegistration(){
    this.registration=true;
    this.login=false;
  }
  showBlog(userName:string){
    this.blog=true;
    this.login=false;
    this.userName=userName;
    this.name=this.userService.getName(userName)
  }
  showLogin(){
    this.registration=false;
    this.login=true;
  }
  logOut(){
    this.login=true;
    this.registration=false;
    this.blog=false;
  }
}
