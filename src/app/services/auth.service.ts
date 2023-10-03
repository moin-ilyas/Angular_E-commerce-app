// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  isAuthenticate:boolean=false;
  constructor(private router:Router){}

  // HARD CODED DATA
  // inputUserName:string = "chiru"
  // inputPassword:string = "chiru1234"

  dbUserName:string = "MoinAmaanKhan"
  dbPassword:string = "moin@123"


  login(v1: string, v2 : string){
    if(v1 === this.dbUserName && v2 === this.dbPassword){
      this.router.navigate(['/home'])
      this.isAuthenticate=true
      // return true
    }
    else {
      this.logItOut()
      // return true
    }
  }


  logItOut(){
    alert('  UNAUTHORIZED ACCESS ! \n You are not eligible to access this page')
    this.router.navigate(['/'])
    this.isAuthenticate=false
    return false
  }
  // isUserLoggedIn(){
  //   if(this.inputUserName === this.dbUserName && this.inputPassword === this.dbPassword){
  //     return true
  //   }
  //   else {
  //     alert('You are not eligible to access this page')
  //     this.router.navigate(['/'])
  //     return true
  //     // return true
  //   }
  // }
  
  // logout(){
  //   this.router.navigate(['/home'])
  // }
}