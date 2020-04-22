import { Injectable } from '@angular/core';

import {Registrationdata} from './registrationdata';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {


 // baseURL = 'http://localhost:3000/';

 baseURLOFUser = 'http://localhost:3000/user/';
  baseURLOFUserDevice = 'http://localhost:3000/usersofdevice/';
  
  constructor(private httpClient: HttpClient) {}
  
  username;
  updaataId;
  getdataresult :String;
  allowuser:boolean= false;

  
  senddata(data : Registrationdata) 
  {
    this.username=data['username'];
    //console.log("senddata angular: ",data);

    

    this.getdata( this.username).subscribe(res=>{
      
      if(res.length == 0 )
      {
        console.log("in if of get");
        this.getdataresult = "no user avaliable";
      }
      else
      {
      console.log("response of server: ",res);
      }
    
      if(this.getdataresult === "no user avaliable")
      {
         return this.httpClient.post(this.baseURLOFUser,data).subscribe(res=>
          {
            console.log("sucess data send bcz not samre user name");
          }); 
      }
      else{
           console.log("username alerdy exist");
      }

    });;
    }
   
 
 
    getdata(username)
  {
    return this.httpClient.get<any[]>(this.baseURLOFUser+username)
  }

  senddataofdeviceuser(dataofuserdevice)
  {
    console.log(dataofuserdevice);
    return this.httpClient.post(this.baseURLOFUserDevice,dataofuserdevice).subscribe(res=>
      {
        console.log(res);
        console.log("sucess data send of userdevice");
      });
  }

getdatofuser()
{
  return this.httpClient.get<any[]>(this.baseURLOFUserDevice);
}

getdatofuserById(id)
{
  return this.httpClient.get<any[]>(this.baseURLOFUserDevice+id);
}

deletedataofuser(id)
{
   return this.httpClient.delete(this.baseURLOFUserDevice+id);
}

datapassingtoupdate(id)
{
  this.updaataId=id;
}
updatedataById(id:string ,data)
{
  return this.httpClient.put(this.baseURLOFUserDevice+id,data);
}
}
