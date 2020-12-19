import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  public addCategoryForm: FormGroup

  constructor(fb: FormBuilder, private http: HttpClient, private router: Router) {

    let addCategoryControls = {

      name: new FormControl("", [
        Validators.required
      ]),
    }

    this.addCategoryForm = fb.group(addCategoryControls)

  }

  ngOnInit(): void {
  }

  public addCategory(): void {

    let data = this.addCategoryForm.value

    this.http.post<any>("https://itbs-backend.herokuapp.com/category/add", data)
      .subscribe(
        result => {
          this.router.navigateByUrl('/category-list')
        },

        error => {
          console.log(error);
          
          console.log("ERROR addCategory");
        }
      )


  }


}
