import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  public addProductForm: FormGroup
  public categoriesList: any[] = []

  constructor(fb: FormBuilder, private http: HttpClient, private router: Router) {

    let addProductControls = {

      name: new FormControl("", [
        Validators.required
      ]),
      price: new FormControl("", [
        Validators.required
      ]),
      imageUrl: new FormControl("", [
        Validators.required
      ]),
      description: new FormControl("", [
        Validators.required
      ]),
      category_id: new FormControl("", [
        Validators.required
      ]),

    }

    this.addProductForm = fb.group(addProductControls)

  }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all").subscribe(
      result => {
        this.categoriesList = result
      },
      error => {
        console.log(error);
      }
    )
  }

  public addProduct(): void {

    let data = this.addProductForm.value
    this.http.post<any>("https://itbs-backend.herokuapp.com/product/add", data)
      .subscribe(
        result => {
          this.router.navigateByUrl('/product-list')
        },

        error => {
          console.log(error);

          console.log("ERROR add product");
        }
      )


  }

}
