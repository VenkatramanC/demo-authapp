import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import {Router} from '@angular/router';
import {CommonService} from '../../providers/common-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:any = "";
  password:any = "";
  constructor(private _cookieService:CookieService, private router: Router, private commService: CommonService) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";
    if(this._cookieService.get("isLoggedIn") == "True"){
      //redirect 
      this.router.navigate(['/dashboard']);
      this.commService.setCookie({value: true})
    }
  }
  handleClick(ev){
    if(this.userName != '' && this.password != ''){
      if(this.userName == "test" && this.password == "test"){
        this._cookieService.put("isLoggedIn", "True");
        this.router.navigate(['/dashboard']);
        this.commService.setCookie({value: true});
      }else{
        window.alert("Please enter valid user details");
      }
    }else{
      window.alert("Please enter valid user details");
    }
  }
}
