import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  userName: string = "אורח";
  ifNotGuest() { 
     console.log(localStorage.getItem('userId') != null&&localStorage.getItem('userId') != "1004" )
     console.log( localStorage.getItem('userName'))
    if (localStorage.getItem('userId') != null&&localStorage.getItem('userId') != "1004") {
      this.userName = localStorage.getItem('userName');
      return true;
    }
    return false;
  
  }
  title = 'Project';
}
