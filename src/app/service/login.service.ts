import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import User from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http : HttpClient) { }
  baseRouteUrl=`${environment.baseUrl}/user`
  login(name: string, password: string){
    let user = { Name: name, Password: password }
        return this.http.post<object>(`${this.baseRouteUrl}/Login/?u=${user}`, user);
  }
  register(user:User){
    return this.http.post<object>(`${this.baseRouteUrl}/Register/?u=${user}`, user)
  }


}
