declare var google:any;


import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private router = inject(Router);

  handleSubmit(formData :any){
    // console.log(formData.value);
    sessionStorage.setItem("loggedInUser",JSON.stringify(formData.value));
    // console.log(sessionStorage.getItem("loggedInUser1"));
    
    this.router.navigate(['home'])
    // formData.reset()
  }
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '433239643159-cutqtkol3rp80s1ei37b0ji91kisaep6.apps.googleusercontent.com',
      callback: (resp: any)=> this.handleLogin(resp)
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 700
    })
    
  }

  private decodeToken(token: string){
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any){
    if(response) {
      //decode the token
      const payLoad = this.decodeToken(response.credential);
      console.log(payLoad);
      
      //store in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
      // console.log(sessionStorage.getItem("loggedInUser"));
      
      //navigate to home/browse
      this.router.navigate(['home'])
    }
  }
  
}