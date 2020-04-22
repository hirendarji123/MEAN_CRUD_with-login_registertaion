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
    
      if(this.http.userForCanActive == true)
      {
        
        return true;
      }
      else{
        alert("U R NOT ALLOW PLEASE FIRST LOGIN");
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
