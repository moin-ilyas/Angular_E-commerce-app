import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagePath1:string = 'assets/images/prod1.jfif';
  imagePath2:string = 'assets/images/prod2.jfif';
  imagePath3:string = 'assets/images/prod3.jfif';

  constructor() { }

  ngOnInit(): void {
  }

}
