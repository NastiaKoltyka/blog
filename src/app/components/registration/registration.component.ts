import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Output() registrationSuccess = new EventEmitter();
  checked: string;

  constructor(private userService: UsersService) {
    this.checked = 'male';
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.addUser(form.value.name, form.value.surname, form.value.login, form.value.password, form.value.sex, form.value.mail);
      console.log(this.userService.users);
      this.registrationSuccess.emit();
    }
  }

}
