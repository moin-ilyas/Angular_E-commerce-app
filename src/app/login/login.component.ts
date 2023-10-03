import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:string =''
  uPass: string
  constructor(private authService: AuthService) { }

  onClick(v1: string, v2 : string){
    this.authService.login(v1,v2)
  }
  
  ngOnInit(): void {
  }

}
