import { Component, OnInit } from '@angular/core';
import { HttpserviceService} from '../httpservice.service';
import {Registrationdata} from '../registrationdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
showdata:any;
  constructor(private http :HttpserviceService,private router:Router) { }

  ngOnInit(): void {
   
    this.http.getdatofuser().subscribe(res=>
      {
        
        this.showdata = res as Registrationdata [];
        ;

      //  this.showdata = res as Registrationdata[];
        console.log( this.showdata);
      });
  }

  delete1(id)
  {
    this.http.deletedataofuser(id).subscribe(res=>
      {
        console.log("delete sucess");
        this.http.getdatofuser().subscribe(res=>
          {
            this.showdata = res as Registrationdata[];
            //console.log( this.showdata);
          });
        this.router.navigate(['/showuser']);
      })
    }

    update(id)
    {
      this.http.datapassingtoupdate(id);
      this.router.navigate(['/update']);
    }

}
