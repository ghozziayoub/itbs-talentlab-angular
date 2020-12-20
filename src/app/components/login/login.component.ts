import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm: FormGroup

  constructor(fb: FormBuilder, private http: HttpClient, private router: Router) {

    let loginControls = {

      email: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required
      ])
    }

    this.loginForm = fb.group(loginControls)

  }

  ngOnInit(): void {
    let token = localStorage.getItem("mytoken")

    if (token) {
      this.router.navigateByUrl("/dashboard")
    }
  }

  public loginUser(): void {

    let data = this.loginForm.value

    this.http.post<any>("https://itbs-backend.herokuapp.com/user/login", data)
      .subscribe(
        result => {
          let token = result.token
          localStorage.setItem("mytoken", token)
          this.router.navigateByUrl('/dashboard')
        },

        error => {
          console.log("ERROR login");
        }
      )


  }

}
