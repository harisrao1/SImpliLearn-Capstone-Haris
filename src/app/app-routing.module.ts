import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  {
    path : 'loginRoute',
    component : LoginComponent
  },
  {
    path : 'registerRoute',
    component : RegisterComponent
  },
  {
    path : 'adminpage',
    component : AppComponent
  },
  {
    path:  'userpage',
    component: UserpageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
