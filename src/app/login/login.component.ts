import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/models/User';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }
  currentUser: User=new User(0,"","","","");

  check() {
    console.log(this.currentUser);
    this.userService.Login(this.currentUser).subscribe((i: any) => {
      console.log(i);

      if (i == false)
        this.router.navigate(["/register", this.currentUser.Name]);
      else if (i == true)
        alert("סיסמא שגויה")
      else {this.router.navigate(["/allRecipes"])
      localStorage.setItem('userId', i.Id + "")
      localStorage.setItem('userName', i.Name)}
    })

  }

  ngOnInit(): void {
  }

}
