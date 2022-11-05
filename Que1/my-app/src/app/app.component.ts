import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student-Data';
  num: number = 17;
  name: string = "Anjali Patel";
  dob: Date = new Date("Wed Jul 31 2002 07:44:57");
  subjects = [
    { code: 701, title: 'NodeJS'} , { code:702, title:' ASP.Net'}, {code:703 , title:' Software Engineering'},{code:704, title: ' Optimization techniques'}];
  casts:string[] = ['ST','SC','OBC','Open','EWS'];
 }
