import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable()
export class CommonService  {
	constructor(private http: HttpClient) { }

  getRequest(){
		let url = "https://reqres.in/api/users/2"
		return this.http.get(url).pipe(
			map(resp =>{
				return resp;
			}),catchError(err => {
				console.log("Error is handled");
				return err;
			})
		)
  }

  public cookieUpdate$ = new Subject();

  getCookie() {
    return this.cookieUpdate$.asObservable();
  }
  setCookie(data) {
      this.cookieUpdate$.next(data);
  }

}
