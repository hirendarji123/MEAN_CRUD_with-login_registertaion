import { Component, OnInit } from '@angular/core';
import { HttpserviceService} from '../httpservice.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpserviceService) { }

  ngOnInit(): void {
  }

  onLogout()
  {
    console.log("in logout");
    this.http.userLogout();
  }
}
