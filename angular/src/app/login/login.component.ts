import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from'@angular/forms';
import {HttpserviceService} from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error;

  forms :FormGroup;

  constructor(private http :HttpserviceService,private router:Router){}
    ngOnInit(): void {
      this.forms =new FormGroup ( {
        username :new FormControl(''),
        password : new FormControl('')
      });
    }

    onsubmit()
    {
        console.log("username" + this.forms.controls['username'].value);
        console.log("password" + this.forms.get('password').value);

        var username = this.forms.get('username').value;
        var password = this.forms.get('password').value;

        this.http.getdata(username).subscribe(res=>
          {
            //console.log(res);
            if(res[0]['username'] == username && res[0]['password'] == password)
            {
              console.log("right user both are correct id and password");
             // this.router.navigate(['/homepage']);
              this.http.datafromlogin(true);;
              this.router.navigate(['/homepage']);
              this.http.userLogin();
              localStorage.setItem('userstates', 'true');
            }
            else{
              console.log("else in login")
              this.error=true;

            }
          });


    }



}
