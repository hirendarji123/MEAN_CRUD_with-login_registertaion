import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import{Data} from '../userdata';
import{HttpserviceService} from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
form:FormGroup;
data = new Data();

  constructor(private http :HttpserviceService,private router:Router) { }

  ngOnInit(): void 
  {
    this.form =new FormGroup (
      {
        username :new FormControl('',[Validators.required]),
        userId : new FormControl('',[Validators.required]),
        MobileNo : new FormControl('',[Validators.required,Validators.minLength(10)]),
        email :new FormControl('',[Validators.required,Validators.email]),
        DeviceName :new FormControl('',[Validators.required]),
        DepartmentName :new FormControl('',[Validators.required]),
      });
  }


  onLogout()
  {
    console.log("in logout");
    this.http.userLogout();
  }
  

  onsubmit()
            {
              
              this.data =this.form.value;
                console.log(this.data);
                
                alert(" enter sucessfuly");
                this.form.reset();
                this.http.senddataofdeviceuser(this.data);
                this.http.getdatofuser();
              this.router.navigate(['/showuser']);
            }
  

}
