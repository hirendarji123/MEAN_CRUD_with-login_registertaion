import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpserviceService} from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {

  constructor(private http:HttpserviceService , private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let login =localStorage.getItem('userstates');
      console.log(login);


       if(this.http.userForCanActive === true)
      {
        console.log("in can active");
        return true;
      }
      else
      {
          //console.log(this.http.userLoginstates);
            if(login === 'true')
            {
              console.log("in login function()");
              return true;
            }
            else
            {
              alert("U R NOT ALLOW PLEASE FIRST LOGIN");
              this.router.navigate(['/login']);
              return false;
            }
      }
  }

}
