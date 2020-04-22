import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import{Data} from '../userdata';
import{HttpserviceService} from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateofuser',
  templateUrl: './updateofuser.component.html',
  styleUrls: ['./updateofuser.component.css']
})
export class UpdateofuserComponent implements OnInit {
userDataOfUpdate;
  form:FormGroup;
data = new Data();
updateDataId;

constructor(private http :HttpserviceService,private router:Router) { }

ngOnInit(): void 
{
  this.form =new FormGroup (
    {
      username :new FormControl('',[Validators.required]),
      userId : new FormControl('',[Validators.required]),
      MobileNo : new FormControl('',[Validators.required,Validators.minLength(10)]),
      email :new FormControl('',[Validators.email]),
      DeviceName :new FormControl('',[Validators.required]),
      DepartmentName :new FormControl('',[Validators.required]),
    });
    
    this.updateDataId = this.http.updaataId;
    this.http.getdatofuserById(this.updateDataId).subscribe(res=>
      {
        console.log("update data");
        
        this.userDataOfUpdate =res as Data[];
        console.log(this.userDataOfUpdate);
      })

  
}
onsubmit()
{
  
  this.data =this.form.value;
    console.log(this.data);
    
    alert(" enter sucessfuly");
    this.form.reset();
    console.log(this.updateDataId);
    this.http.updatedataById(this.updateDataId,this.data).subscribe(res=>
      {
        console.log("sucessfylly update");
        this.router.navigate(['/showuser']);
      })
  
}

}
