import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';


import{ HttpserviceService} from './httpservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ShowuserComponent } from './showuser/showuser.component';

import { UpdateofuserComponent } from './updateofuser/updateofuser.component';
import { AuthgaurdGuard} from './authgaurd.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomepageComponent,
    AdduserComponent,
    ShowuserComponent,
    UpdateofuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [HttpserviceService,AuthgaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
