import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { UpdateofuserComponent } from './updateofuser/updateofuser.component';
import {AuthgaurdGuard as authgaurd} from './authgaurd.guard';
import { DevicewithuserComponent } from './devicewithuser/devicewithuser.component';

const routes: Routes = [
  {
    path:'' ,redirectTo:'login' ,pathMatch:'full'
  },
  { path:'login' ,component:LoginComponent},
  {
    path:'registration' ,component :RegistrationComponent
  },
  {
    path:'homepage' ,component:HomepageComponent ,canActivate:[authgaurd]
  },
  {path:'adduser',component :AdduserComponent , canActivate:[authgaurd]
  },
  {
    path:'showuser',component:ShowuserComponent,canActivate:[authgaurd]
  },
  {
    path:'update' ,component:UpdateofuserComponent,canActivate:[authgaurd]
  },
  {
    path:'devicewithuser',component:DevicewithuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
