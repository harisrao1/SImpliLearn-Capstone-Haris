import { Component, OnInit } from '@angular/core';
import { UserService } from '../entities/user/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser, User } from '../entities/user/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: Array<IUser> = []

  registerForm: FormGroup
  username: string = ""
  password: string = ""
  email: string = ""
  error: boolean = false


  constructor(protected userService: UserService, protected formBuilder: FormBuilder) { }


  onSubmit() {
    const user = new User(this.registerForm.value['username'], this.registerForm.value['password'], this.registerForm.value['email'],null)
    console.log( this.registerForm.value['email'] + 'added to db')
    this.userService.create(user).then((result: IUser) => {
      if (result == undefined) {
        this.error = true
      } else {
        this.error = false

      }
    })
  }

  hideError() {
    this.error = false
  }




  ngOnInit(): void {
    this.initForm()
  }


  private initForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(this.username, Validators.required),
      password: new FormControl(this.password, Validators.required),
      email: new FormControl(this.email, Validators.required)

    })

  }
}
