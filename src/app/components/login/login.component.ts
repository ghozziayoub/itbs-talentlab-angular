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
  }

  public loginUser(): void {

    let data = this.loginForm.value

    this.http.post<any>("https://itbs-backend.herokuapp.com/user/login", data)
      .subscribe(
        result => {
          this.router.navigateByUrl('/dashboard')
        },

        error => {
          console.log("ERROR login");
        }
      )


  }

}
