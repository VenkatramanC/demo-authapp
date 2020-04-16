import { Component, OnInit } from '@angular/core';
import{ CommonService } from '../../providers/common-service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { QueryParamsHandling } from '@angular/router/src/config';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userInfo:any;
  constructor(private commService: CommonService, private router: Router, private cookieService:CookieService) { }

  ngOnInit() {
    if(this.cookieService.get("isLoggedIn") == "True"){
      this.getuserInfo();
    }else{
      this.router.navigate(['/login']);
    }

    // this.router.navigate['/login'];
  }
  
  getuserInfo(){
    this.commService.getRequest().subscribe(resp => {
      this.userInfo = resp['data'];
      console.log(resp);
    })
  }

}
