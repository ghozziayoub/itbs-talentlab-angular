import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productsList: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/product/all").subscribe(
      result => {
        this.productsList = result
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteProduct(product: any) {

    let indice = this.productsList.indexOf(product)
    this.productsList.splice(indice, 1)

    this.http.delete<any>("https://itbs-backend.herokuapp.com/product/delete/" + product._id).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )


  }

}
