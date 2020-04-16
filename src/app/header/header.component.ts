import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import {CommonService} from '../../providers/common-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  display:boolean = false;
  constructor(private router: Router, private cookieService: CookieService,private commService: CommonService) { 
    this.commService.getCookie().subscribe(resp =>{
      console.log(resp)
      if(resp['value'] == true){
        this.display = true;
      }else{
        this.display = false;
      }
    })
  }

  ngOnInit() {
    if(this.cookieService.get('isLoggedIn') == "True"){
      this.display = true;
    }else{
      this.display = false;
    }
  }

  onLogoutClick(ev){
    this.cookieService.remove('isLoggedIn');
    this.router.navigate(['/login']);
    this.commService.setCookie({value: false})
  }

}
