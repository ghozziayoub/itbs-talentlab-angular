import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categoriesList: any[] = []
  public productsList: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all").subscribe(
      result => {
        this.categoriesList = result
      },
      error => {
        console.log(error);
      }
    )
    this.http.get<any>("https://itbs-backend.herokuapp.com/product/all").subscribe(
      result => {
        this.productsList = result
      },
      error => {
        console.log(error);
      }
    )
  }

}
