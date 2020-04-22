import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from'@angular/forms';
import { Router } from '@angular/router';
import {Registrationdata} from '../registrationdata';
import {HttpserviceService} from '../httpservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  show: boolean;

  form :FormGroup;
  registrationdata = new Registrationdata();

  constructor(private router :Router,private httpservices:HttpserviceService){}
   
  ngOnInit(): void {
      this.form =new FormGroup ( {
        name :new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required,Validators.email]),
        username :new FormControl('',[Validators.required]),
        password :new FormControl('',[Validators.required,Validators.minLength(3)]),
        confirm_password :new FormControl('',[Validators.required,Validators.minLength(3)]),
      });
     // this.httpservices.getdata();
    }
  
    onsubmit()
    {
      //console.log("onsubmit");
      this.registrationdata =this.form.value;
      //console.log(this.registrationdata);
        //  console.log((this.forms.get('username'),this.forms.get('password')))
        // console.log(this.forms.get('username').value,this.forms.get('password').value);
        //console.log("end");
        if( this.form.get('password').value == this.form.get('confirm_password').value )
        {
         
        alert("sucessfully registion");
        this.form.reset();
        
        
       this.httpservices.senddata(this.registrationdata);
        
        this.router.navigate(['/login']);
        }
        else{
                this.show = true;
        }
      }
  

}
