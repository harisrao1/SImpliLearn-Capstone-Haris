import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../entities/user/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser, User } from '../entities/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Array<IUser> = [];

  admin :boolean = false;
  user :boolean = false;
  userpage :boolean = false;
  
  rt: string = 'loginRoute';


  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  error: boolean = false;



  constructor(protected userService: UserService, protected formBuilder: FormBuilder, private router: Router) {
    this.rt = router.url; 

   }

  // check if user exists
  onSubmit() {
    //const user = new User(this.loginForm.value['username'], this.loginForm.value['password'])
    var username = this.loginForm.value['username']
    var password = this.loginForm.value['password']
    let usersarr = this.loadUsers()

    console.log('got this username' + username)

    if (username === 'admin' && password === 'admin123') {
      //admin login
      this.admin=true;
      this.user =false;
      this.userpage = true;
      this.router.navigate(['./adminpage'])
      this.userService.user = false;


      console.log('in admin')

    } else {
      this.admin = false;
      this.userService.user = true;
      console.log('username not found')
      //console.log(usersarr)
      if (usersarr != null) {
        for (let user of usersarr) {
      console.log(user.username + user.password)
      console.log(username + password)
      

          if (user.username == username && user.password == password) {
            //User found in Database
            this.user = true
            this.userpage = true;
            console.log('username found')
            this.router.navigate(['./userpage'])
            
          }
        }
      } else {
        //No users in database
        this.user = false
        this.userpage = false;
      }
    }




  }

  private loadUsers() {
    this.userService.get()
      .then((result: Array<IUser>) => {
        this.users = result
      })
    return this.users;
  }


  ngOnInit(): void {
    this.initForm();
    this.loadUsers()
  }

  hideError() {
    this.error = false;
  }


  private initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(this.username, Validators.required),
      password: new FormControl(this.password, Validators.required)
    })
  }

}
