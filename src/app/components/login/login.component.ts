import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() registration = new EventEmitter();
  @Output() blog = new EventEmitter<string>();
  error: boolean;
  constructor(private userService: UsersService) {
    this.error = false;
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.userService.checkLogin(form.value.login, form.value.password)) {
        this.blog.emit(form.value.login);
        this.error = false;
      }
      else if (this.userService.userExist(form.value.login)) {
        this.error = true;
      }
      else {
        this.registration.emit();
      }
    }
  }

}
