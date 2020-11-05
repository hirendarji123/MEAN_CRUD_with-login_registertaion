import { Component} from '@angular/core';

@Component({
  selector: 'app-devicewithuser',
  templateUrl: './devicewithuser.component.html',
  styleUrls: ['./devicewithuser.component.css']
})
export class DevicewithuserComponent  {



  public devices: any[] = [{
    name: '',
    mac:'',
    type:''
  }];

  logValue(form)
  {
    console.log(form);  

  }

  addAddress() {
    this.devices.push({
      name: '',
      mac:'',
      type:''
    });
    
  }


  removeAddress(i: number) {
    if(this.devices.length == 1)
    {
    alert("r u delete last elemen ?")
  }
  this.devices.splice(i, 1);
  }
}
