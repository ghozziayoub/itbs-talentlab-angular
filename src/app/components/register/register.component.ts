import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup

  constructor(fb: FormBuilder, private http: HttpClient, private router: Router) {

    let registerControls = {
      firstname: new FormControl("", [
        Validators.required
      ]),
      lastname: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
      repassword: new FormControl("", [
        Validators.required
      ]),
    }

    this.registerForm = fb.group(registerControls)

  }

  ngOnInit(): void {
    let token = localStorage.getItem("mytoken")

    if (token != null) {
      this.router.navigateByUrl("/dashboard")
    }
    
  }

  public registerUser(): void {
    console.log(this.registerForm.value);

    let data = this.registerForm.value

    this.http.post<any>("https://itbs-backend.herokuapp.com/user/register", data)
      .subscribe(
        result => {
          this.router.navigateByUrl('/login')
        },

        error => {
          console.log("ERROR Register");
        }
      )


  }

}
