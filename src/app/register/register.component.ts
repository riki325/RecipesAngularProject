import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/models/User';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {

  constructor(public userService:UserService, public ActivatedR: ActivatedRoute, private router: Router){}
  
  currentUser: User=new User(0,"","","","");
   isRegister: number;
addUser(){
  this.userService.Register(this.currentUser).subscribe((succ:any)=>{
    console.log(succ);
    if (succ ==true)
    this.isRegister =1;

    else if(succ==false)  this.isRegister =2
   else 
    {
      localStorage.setItem('userId', succ.Id + "")
      this.router.navigate(['/allRecipes'])
      
    }


  })

 
}
ngOnInit(): void {
}
}
